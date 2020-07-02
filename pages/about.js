import { useState } from 'react'
import App from '../components/App'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from '../components/ErrorMessage'
import Pattern from '../components/Pattern'
import Loading from '../components/Loading'
import Welcome from '../components/Welcome'
import colors from '../lib/colors'
import ShowMore from '../components/ShowMore'

export const DESCRIPTION = gql`
  query {
    content {
      aboutHtml
    }
  }
`
const styleObj = {
  color: 'white',
  backgroundColor: 'red'
};

export default () => {

  const [showMore, setShowMore] = useState(false)

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
                  className='description ql-content color1 ql-content'
                  dangerouslySetInnerHTML={{
                    __html:
                      data.content && data.content.aboutHtml ? data.content.aboutHtml : ''
                  }}
                />
                  <ShowMore
                  open={showMore}
                  set={setShowMore}
                  html={'<img src="https://nyc3.digitaloceanspaces.com/terrakryadev/2a203c8f-5a23-4dad-8af3-6389785b9ead-AFP_logo.png"></img>'}
                />
              </Pattern>
              <style jsx>{`
                .description {
                  color: ${colors.dark};
                }
                .description > p {
                  display: none;
                }
                strong {
                  font-size: 100px !important;
                }
              `}</style>
            </div>
          )
        }}
      </Query>
    </App>
  )
}
