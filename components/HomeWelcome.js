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
      headerImages
      title
      subTitle
    }
    categories {
      id
      slug
      name
    }
  }
`

const HomeWelcome = ({ router: { pathname } }) => (
  <Query query={CONTENT}>
    {({ loading, error, data: { content, categories } }) => {
      return (
        <Welcome
          text={loading || error ? '' : content.subTitle}
          links={loading || error ? [] : categories}
          logo={loading || error ? '' : content.logo}
          background={loading || error ? '' : content.headerImages}
          arrow
          height='100vh'
        />
      )
    }}
  </Query>
)

export default withRouter(HomeWelcome)
