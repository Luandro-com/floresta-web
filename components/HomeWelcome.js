import Link from 'next/link'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Welcome from './Welcome'
import Loading from './Loading'

export const CONTENT = gql`
  query {
    content {
      logo
      headerImage
      title
      subTitle
    }
  }
`

const HomeWelcome = ({ router: { pathname } }) => (
  <Query query={CONTENT}>
    {({ loading, error, data: { content } }) => {
      return (
        <Welcome
          text={loading || error ? '' : content.subTitle}
          logo={loading || error ? '' : content.logo}
          background={loading || error ? '' : content.headerImage}
          arrow
          height='100vh'
        />
      )
    }}
  </Query>
)

export default withRouter(HomeWelcome)
