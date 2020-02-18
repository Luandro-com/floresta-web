import Link from 'next/link'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Welcome from './Welcome'
export const CONTENT = gql`
  query {
    content {
      banner
      title
      subTitle
    }
  }
`

const CategoryWelcome = ({ router: { pathname } }) => (
  <Query query={CONTENT}>
    {({ loading, error, data }) => {
      if (error) return <h2>Oops</h2>
      return <Welcome text={loading ? '' : data.content.subTitle} />
    }}
  </Query>
)

export default withRouter(CategoryWelcome)
