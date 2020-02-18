import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import CategoryItem from './CategoryItem'
import Loading from './Loading'

export const PROJECT_CATEGORIES = gql`
  query {
    categories {
      id
      slug
      name
      icon
      media
    }
  }
`
export default function CategoryList ({ noTitle }) {
  return (
    <Query query={PROJECT_CATEGORIES}>
      {({ loading, error, data, fetchMore }) => {
        if (error) return <ErrorMessage message='Error loading posts.' />
        if (loading) return <Loading />
        // const areMorePosts = allPosts.length < _allPostsMeta.count
        return (
          <div id='category-list'>
            <section>
              {!noTitle && <h2>Linhas de ação</h2>}
              <div className='container'>
                {data.categories.map(category => (
                  <CategoryItem {...category} key={category.id} />
                ))}
              </div>
              {/* {areMorePosts ? (
							<button onClick={() => loadMorePosts(allPosts, fetchMore)}>
								{' '}
								{loading ? 'Loading...' : 'Show More'}{' '}
							</button>
						) : (
							''
						)} */}
            </section>
            <style jsx>{`
              section {
                width: 100%;
                text-align: center;
              }
              h2 {
                /* font-size: 2em;
                font-weight: 100; */
                padding-top: 10vh;
              }
              .container {
                padding-top: 2vh;
                margin: 0 auto;
                width: 100%;
                display: flex;
                flex-flow: column;
                align-items: center;
              }
              @media screen and (min-width: 640px) {
                .container {
                  flex-flow: row wrap;
                  align-content: flex-end;
                  justify-content: space-around;
                }
              }
              @media screen and (min-width: 720px) {
                .container {
                  width: 90%;
                  /* width: 968px; */
                }
              }
            `}</style>
          </div>
        )
      }}
    </Query>
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
