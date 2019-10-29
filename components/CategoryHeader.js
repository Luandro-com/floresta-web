import { useState } from 'react'
import { Query, useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import CategoryHeaderItem from './CategoryHeaderItem'
import Loading from './Loading'
import ShowMore from './ShowMore'

import colors from '../lib/colors'

export const PROJECT_CATEGORIES = gql`
  query {
    categories {
      id
      slug
      name
      intro
      description
      icon
    }
  }
`

export const HTML = gql`
  query {
    content {
      projectsHtml
    }
  }
`

export default function CategoryHeader ({ slug, color, artFilter }) {
  const [showMore, setShowMore] = useState(false)
  let projectsHtml = null
  if (!slug) {
    const contentQuery = useQuery(HTML)
    const loadingContent = contentQuery.loading
    const errorContent = contentQuery.error
    projectsHtml =
      contentQuery.data && contentQuery.data.content
        ? contentQuery.data.content.projectsHtml
        : ''
  }
  return (
    <Query query={PROJECT_CATEGORIES}>
      {({ loading, error, data: { categories }, fetchMore }) => {
        if (error) return <ErrorMessage message='Error loading posts.' />
        if (loading) return <Loading />
        // const areMorePosts = allPosts.length < _allPostsMeta.count
        const thisCategory = slug
          ? categories.filter(c => c.slug === slug)[0]
          : categories[0]

        return (
          <section>
            <div className='container'>
              {slug && (
                <div className='title'>
                  <img src='/static/grafismo_p.png' />
                  <h2>
                    {categories.filter(c => c.slug === slug)[0]
                      ? categories.filter(c => c.slug === slug)[0].name
                      : 'Inválido'}
                  </h2>
                </div>
              )}
              {slug && <div className='divider' />}
              <div className='list'>
                {categories &&
                  categories.map(category => (
                    <CategoryHeaderItem
                      color={color}
                      {...category}
                      key={category.id}
                      current={thisCategory.slug}
                    />
                  ))}
              </div>
            </div>
            <div className='info'>
              <div
                className={
                  color
                    ? `description medium ${color}`
                    : 'description medium dark'
                }
                dangerouslySetInnerHTML={{
                  __html: projectsHtml || thisCategory.intro
                }}
              />
              {slug && (
                <ShowMore
                  color={color}
                  open={showMore}
                  set={setShowMore}
                  html={thisCategory.description}
                />
              )}
            </div>
            {/* {areMorePosts ? (
							<button onClick={() => loadMorePosts(allPosts, fetchMore)}>
								{' '}
								{loading ? 'Loading...' : 'Show More'}{' '}
							</button>
						) : (
							''
						)} */}
            <style jsx>{`
              section {
                /* padding: 5vh 0 0; */
                background: none;
              }
              h2 {
                font-size: 2em;
                font-weight: 600;
                line-height: 1em;
                text-align: left;
                color: ${color || colors.dark};
              }
              img {
                display: none;
                position: absolute;
                left: -3.5%;
                filter: ${artFilter};
              }
              div {
                align-items: center;
                display: flex;
                justify-content: center;
              }
              .divider {
                display: none;
                height: 100px;
                background: ${color || colors.dark};
                width: 2px;
                margin: 0 5vw;
              }
              .container {
                width: 90%;
                margin: 0 auto;
                flex-flow: column;
                align-items: center;
                justify-content: center;
              }
              .list {
                flex-flow: row wrap;
                align-items: baseline;
              }
              .info {
                display: flex;
                flex-flow: column;
                width: 90%;
                margin: 5vh auto 0;
              }
              .description {
                color: ${color || colors.dark};
                margin: 5vh auto 0;
                display: block;
              }
              @media screen and (min-width: 720px) {
                .list {
                    width: 90%;
                    flex-flow: row nowrap;
                  }
              }
              @media screen and (min-width: 1024px) {
                h2 {
                  font-size: 3.2em;
                }
                section {
                }
                img {
                  display: block;
                  width: 10%;
                }
                .container {
                  flex-flow: row;
                  /* width: 720px; */
                }
                .list {
                    width: 60%;
                    flex-flow: row nowrap;
                  }
                .title {
                  width: 20%;
                }
                .divider {
                  display: block;
                }
                .description,
                .container {
                  /* width: 720px; */
                  /* margin: 5vh auto 0; */
                  width: 80%;
                  max-width: 968px;
                }
              }
              /* @media screen and (min-width: 1024px) {
                img {
                  width: 175px;
                }
                .container,
                .description {
                  /* width: 800px; */
                }
              }
              @media screen and (min-width: 1280px) {
                .container,
                .description {
                  /* width: 968px; */
                }
              } */
            `}</style>
          </section>
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
