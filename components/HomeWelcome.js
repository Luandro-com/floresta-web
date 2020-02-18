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
    {({ loading, error, data }) => {
      if (error) return ''
      if (loading) return ''

      return (
        <Welcome
          text={loading || error ? '' : data.content.subTitle}
          links={loading || error ? [] : data.categories}
          logo={loading || error ? '' : data.content.logo}
          background={loading || error ? '' : data.content.headerImages}
          arrow
          height='100vh'
        />
      )
    }}
  </Query>
)

export default withRouter(HomeWelcome)
