import App from '../components/App'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from '../components/ErrorMessage'
import Loading from '../components/Loading'
import Pattern from '../components/Pattern'
import NewsItem from '../components/NewsItem'
import Welcome from '../components/Welcome'
import Pagination from '../components/Pagination'

import colors from '../lib/colors'

export const NEWS_ALL = gql`
  query {
    newsAll {
      id
      intro
      description
      link
      title
      media
      post {
        id
      }
    }
  }
`

export default () => {
  return (
    <App>
      <Query query={NEWS_ALL}>
        {({ loading, error, data: { newsAll } }) => {
          if (error) return <ErrorMessage message='Error loading posts.' />
          if (loading) return <Loading />
          return (
            <div className='wrapper'>
              <Welcome background={'/static/news.jpeg'} height='95vh' />
              <Pattern pattern='/static/pattern_2.png'>
                <div className='list'>
                  {newsAll.map(news => (
                    <NewsItem {...news} key={news.id} width='400px' />
                  ))}
                </div>
                {/* <Pagination /> */}
              </Pattern>
              <style jsx>{`
                .pattern {
                  background: ${colors.light2};
                  // background-image: url("/static/grafismo.png");
                  background-repeat: round;
                  margin-top: -5vh;
                  padding-bottom: 20vh;
                }
                .container {
                  margin: 0 auto;
                  width: 90%;
                }
                @media screen and (min-width: 1024px) {
                  .list {
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                    justify-content: space-between;
                  }
                  .container {
                    max-width: 968px;
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
