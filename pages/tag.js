import App from '../components/App'
import Router from 'next/router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from '../components/ErrorMessage'
import Loading from '../components/Loading'
import Welcome from '../components/Welcome'
import TagPage from '../components/TagPage'
import colors from '../lib/colors'

export const TAG = gql`
  query($slug: String, $id: ID) {
    projectTags(slug: $slug, id: $id) {
      slug
      id
      name
      description
      media
      intro
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

export default () => {
  let id = null
  let slug = null
  if (Router.router) {
    if (Router.router.query.slug) {
      slug = Router.router.query.slug
    } else if (Router.router.query.id) {
      id = Router.router.query.id
    }
  }
  return (
    <App>
      <Query query={TAG} variables={slug ? { slug } : { id }}>
        {({ loading, error, data, fetchMore }) => {
          if (error) return <ErrorMessage message='Error loading posts.' />
          if (loading) return <Loading />
          const list = data.projectTags[0].projects
          return (
            <div>
              <Welcome
                background={data.projectTags[0].media || '/static/default.png'}
                height='95vh'
              />
              <h1>{data.projectTags[0].name}</h1>
              {!loading && !error && (
                <div className='info'>
                    <h2 dangerouslySetInnerHTML={{
                        __html: data.projectTags[0].intro
                      }}
                    />
                    <div
                    className={'description ql-content light medium'}
                    dangerouslySetInnerHTML={{
                      __html: data.projectTags[0].description
                    }}
                  />
                </div>
              )}
              <div className='pattern'>
                <div>
                  <TagPage list={list} tagTitleColor={colors.light} />
                </div>
              </div>
            </div>
          )
        }}
      </Query>
      <style jsx>{`
        h1, h2 {
          text-align: center;
        }
        .info {
          background: ${colors.color4};
          padding: 50px 0 70px;
        }
        .description {
          width: 90%;
          margin: 0 auto;
          display: block;
        }
        @media screen and (min-width: 640px) {
          .description {
            width: 80%;
          }
        }
        @media screen and (min-width: 1024px) {
          .description {
            max-width: 968px;
          }
        }
        .pattern {
          background: ${colors.dark2};
          background-image: url('/static/pattern_2.png');
          background-repeat: round;
          margin-top: -5vh;
          padding: 5vh 0;
        }
      `}</style>
    </App>
  )
}
