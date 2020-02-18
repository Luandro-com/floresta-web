import App from '../components/App'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from '../components/ErrorMessage'
import Pattern from '../components/Pattern'
import Loading from '../components/Loading'
import Welcome from '../components/Welcome'
import colors from '../lib/colors'

export const DESCRIPTION = gql`
  query {
    content {
      aboutHtml
    }
  }
`

export default () => {
  return (
    <App>
      <Query query={DESCRIPTION}>
        {({ loading, error, data }) => {
          if (error) return <ErrorMessage message='Error loading posts.' />
          if (loading) return <Loading />
          return (
            <div className='wrapper'>
              <Welcome background={'/static/about.jpeg'} height='95vh' />
              <Pattern pattern={'/static/pattern_3.png'}>
                <div
                  className='description color1'
                  dangerouslySetInnerHTML={{
                    __html:
                      data.content && data.content.aboutHtml ? data.content.aboutHtml : ''
                  }}
                />
              </Pattern>
              <style jsx>{`
                .description {
                  color: ${colors.dark};
                }
              `}</style>
            </div>
          )
        }}
      </Query>
    </App>
  )
}
