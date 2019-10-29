import App from '../components/App'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from '../components/ErrorMessage'
import Loading from '../components/Loading'
import Welcome from '../components/Welcome'
import Pattern from '../components/Pattern'
import VillageList from '../components/VillageList'

import colors from '../lib/colors'

export const DESCRIPTION = gql`
  query {
    content {
      villageHtml
      villages {
        id
        photos
        slug
        name
        media
      }
    }
  }
`

export default () => {
  return (
    <App>
      <Query query={DESCRIPTION}>
        {({ loading, error, data: { content } }) => {
          if (error) return <ErrorMessage message='Error loading posts.' />
          if (loading) return <Loading />
          return (
            <div className='wrapper'>
              <Welcome background={'/static/village.jpeg'} height='95vh' />
              <Pattern pattern='/static/pattern_3.png'>
                <VillageList
                  villages={content.villages}
                  text={content.villageHtml}
                />
              </Pattern>
              <style jsx>{`
                /* padding-top: 10vh; */
                iframe {
                  width: 100%;
                  margin: 30px auto;
                }
              `}</style>
            </div>
          )
        }}
      </Query>
    </App>
  )
}
