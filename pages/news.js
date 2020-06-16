import App from '../components/App'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from '../components/ErrorMessage'
import Loading from '../components/Loading'
import Pattern from '../components/Pattern'
import NewsItem from '../components/NewsItem'
import Welcome from '../components/Welcome'
import TagList from '../components/TagList'

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
      tags {
        id
        name
        slug
      }
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
        {({ loading, error, data }) => {
          if (error) return <ErrorMessage message='Error loading posts.' />
          if (loading) return <Loading />
          return (
            <div className='wrapper'>
              <Welcome background={'/static/news.jpeg'} height='95vh' />
              <div className='container pattern'>
                <div className=''>
                  <h1>Notícias</h1>
                  <div className='list'>
                    {data.newsAll.map(news => (
                      <NewsItem {...news} key={news.id} width='400px' />
                    ))}
                  </div>
                  {/* <Pagination /> */}
                </div>
                <div className='tag-list'>
                 
                </div>
                <TagList
                    column
                    titleColor={colors.light}
                    color={colors.color1}
                    hoverColor={colors.light}
                    hoverBackgroundColor={colors.color1}
                    width={'250px'}
                    weight={100}
                    fontSize={'2.5em'}
                    padding={'5px 25px'}
                    radius={5}
                  />
              </div>

              <style jsx>{`
                h1 {
                  text-align: center;
                  color: ${colors.light};
                  font-weight: 500;
                  margin: 0;
                  padding-top: 40px;
                }
                .pattern {
                  background: ${colors.dark2};
                  background-image: url('/static/pattern_2.png');
                  background-repeat: round;
                  margin-top: -5vh;
                  padding-bottom: 50vh;
                }
                .container {
                  margin: 0 auto;
                  padding-bottom: 5vh;
                }
                .tag-list {
                  padding-top: 15vh;
                }
                @media screen and (min-width: 1024px) {
                  .list {
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                    justify-content: space-between;
                  }
                  .container {
                    display: flex;
                    flex-flow: row nowrap;
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
