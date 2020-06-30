
import BackButton from './BackButton'
import TagList from './TagList'
import ProjectList from '../components/ProjectList'

import colors from '../lib/colors'

const mergeById = (prev, curr) => {
  const ObjectId = id => id // mock of ObjectId
  return [
    ...prev
      .concat(curr)
      .reduce(
        (m, o) => m.set(o.id, Object.assign(m.get(o.id) || {}, o)),
        new Map()
      )
      .values()
  ]
}

const List = ({ list }) => {
  let allProjects = []
  list.map(p => {
    if (allProjects.length === 0) {
      allProjects = list
    } else {
      allProjects = mergeById(allProjects, list)
    }
  })
  return <ProjectList projects={allProjects} />
}

export default ({ tagTitleColor, list }) => {
  return (
    <section>
      <div className='back'>
        <BackButton />
      </div>
      <div className='container'>
        <List list={list} />
      </div>
      <div className='tag-list'>
          <TagList
            titleColor={tagTitleColor || colors.dark}
            color={colors.color1}
            hoverColor={colors.light}
            hoverBackgroundColor={colors.color1}
            weight={600}
            fontSize={'2.5em'}
            padding={'5px 25px'}
            radius={5}
          />
        </div>
      <style jsx>{`
        section {
          margin: 0 auto;
          width: 95%;
        }
        div {
          align-items: center;
          display: flex;
        }
        .back {
          position: relative;
          right: 1vw;
          cursor: pointer;
          top: 20vh;
        }
        .container {
          display: flex;
          margin: 0 auto;
        }
        .tag-list {
          width: 100%;
        }
        @media screen and (min-width: 480px) {
          width: 90%;
        }
        @media screen and (min-width: 1024px) {
          /* width: 968px; */
          margin: 0 auto;
        }
        @media screen and (min-width: 1200px) {
          .container {
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            justify-content: space-between;
          }
          .tag-list {
          }
        }
      `}</style>
    </section>
  )
}

// function loadMorePosts(allPosts, fetchMore) {
// 	fetchMore({
// 		variables: {
// 			skip: allPosts.length
// 		},
// 		updateQuery: (previousResult, { fetchMoreResult }) => {
// 			if (!fetchMoreResult) {
// 				return previousResult;
// 			}
// 			return Object.assign({}, previousResult, {
// 				// Append the new posts results to the old one
// 				allPosts: [ ...previousResult.allPosts, ...fetchMoreResult.allPosts ]
// 			});
// 		}
// 	});
// }
