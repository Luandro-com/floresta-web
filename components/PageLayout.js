import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import BackButton from './BackButton'
import TagList, { PROJECT_TAGS } from './TagList'
import ProjectList from '../components/ProjectList'
import Project from '../components/Project'
import Loading from '../components/Loading'

import colors from '../lib/colors'

export const TAG_PROJECTS = gql`
  query($slug: String, $id: ID) {
    projectTags(slug: $slug, id: $id) {
      slug
      id
      name
      description
      media
      projects {
        id
        slug
        name
        media
        description
        intro
        tags {
          id
          slug
          name
        }
      }
    }
  }
`

export const CATEGORY = gql`
  query($slug: String, $id: ID) {
    categories(slug: $slug, id: $id) {
      slug
      description
      projects {
        id
        slug
        name
        media
        description
        intro
        tags {
          id
          slug
          name
        }
      }
    }
  }
`

export const CATEGORIES = gql`
  query {
    categories {
      id
      slug
      description
      projects {
        id
        slug
        name
        media
        description
        intro
        tags {
          id
          slug
          name
        }
      }
    }
  }
`

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

function List ({ slug, tags, id }) {
  const query =
    tags && (slug || id) ? TAG_PROJECTS : slug || id ? CATEGORY : CATEGORIES
  return (
    <Query query={query} variables={slug ? { slug } : { id }}>
      {({ loading, error, data, fetchMore }) => {
        let allProjects = []
        if (error) return <ErrorMessage message='Error loading posts.' />
        if (loading) return <Loading />
        const list = data[tags ? 'projectTags' : 'categories']
        if (list) {
          list.map(p => {
            if (allProjects.length === 0) {
              allProjects = p.projects
            } else {
              allProjects = mergeById(allProjects, p.projects)
            }
          })
          return (
            <ProjectList
              projects={allProjects}
              title={tags && list[0] && list[0].name}
            />
          )
        } else {
          return <Loading />
        }
      }}
    </Query>
  )
}

export default function PageLayout ({
  slug,
  project,
  tags,
  tagTitleColor,
  id,
  name
}) {
  return (
    <section>
      {/* {tags && !loading && !error && content && (
        <div className='info'>
          <div
            className={"description ql-content light medium"}
            dangerouslySetInnerHTML={{
              __html: content.categoriesHtml
            }}
          />
        </div>
      )} */}
      <div className='back'>
        <BackButton />
      </div>
      <div className='container'>
        {!project ? (
          <List slug={slug} id={id} tags={tags} />
        ) : (
          <Project {...project} />
        )}
      </div>
          <div className='tag-list'>
          <TagList
            column
            titleColor={tagTitleColor || colors.dark}
            color={colors.color1}
            hoverColor={colors.light}
            hoverBackgroundColor={colors.color1}
            width={'250px'}
            weight={600}
            fontSize={'2.5em'}
            padding={'5px 25px'}
            radius={5}
          />
        </div>
      <style jsx>{`
        section {
          margin: 0 auto;
          padding-top: 5vh;
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
          top: ${tags ? '22vh' : '5vh'};
        }
        .container {
          display: flex;
          flex-flow: horizontal;
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
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
          .tag-list {
            width: 200px;
            
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
