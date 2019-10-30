import Router from 'next/router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import App from '../components/App'
import ErrorMessage from '../components/ErrorMessage'
import Post from '../components/Post'
import Loading from '../components/Loading'
import BackButton from '../components/BackButton'
import NewsList from '../components/NewsList'

import colors from '../lib/colors'

export const NEWS = gql`
  query($id: ID, $slug: String) {
    news(slug: $slug, id: $id) {
      id
      media
      tags {
        id
        name
        slug
      }
      post {
        id
        title
        body
      }
    }
  }
`

export default () => {
  let variable = null
  if (Router.router) {
    if (Router.router.query.slug) {
      variable = {
        slug: Router.router.query.slug
      }
    } else if (Router.router.query.id) {
      variable = {
        id: Router.router.query.id
      }
    }
  }
  return (
    <App>
      <Query query={NEWS} variables={variable}>
        {({ loading, error, data: { news } }) => {
          if (error) return <ErrorMessage message='Error loading posts.' />
          if (loading) return <Loading />
          return (
            <div>
              <section>
                <div className='back'>
                  <BackButton top='52%' />
                </div>
                <div className='container'>
                  <Post {...news.post} media={news.media} tags={news.tags} />
                </div>
                <div className='list'>
                  <NewsList />
                </div>
              </section>

              <style jsx>{`
                margin: 0 auto;
                padding: 5vh 0;
                background: ${colors.dark2};
                background-image: url('/static/pattern_2.png');
                background-repeat: round;
                width: 100%;
                section {
                  width: 95%;
                  margin: 0 auto;
                }
                .back {
                  background: none;
                  position: absolute;
                  left: 20%;
                  cursor: pointer;
                  top: 12%;
                }
                .container {
                  display: flex;
                  flex-flow: column;
                  margin: 0 auto;
                }
                @media screen and (min-width: 480px) {
                  section {
                    width: 90%;
                  }
                }
                @media screen and (min-width: 1024px) {
                  .container {
                    max-width: 1024px;
                  }
                  /* width: 968px; */

                  /* margin: 0 auto; */
                }
                @media screen and (min-width: 1200px) {
                  .container {
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: flex-start;
                    justify-content: space-between;
                  }
                }
              `}</style>
            </div>
          )
        }}
      </Query>
    </App>
  )
}
