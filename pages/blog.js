import Router from "next/router"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import App from "../components/App"
import ErrorMessage from "../components/ErrorMessage"
import Pattern from "../components/Pattern"
import Loading from "../components/Loading"
import colors from "../lib/colors"

export const POST = gql`
  query($id: ID, $slug: String) {
    post(slug: $slug, id: $id) {
      id
      slug
      title
      body
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
      <Query query={POST} variables={variable}>
        {({ loading, error, data: { post } }) => {
          if (error) return <ErrorMessage message='Error loading posts.' />
          if (loading) return <Loading />
          return (
            <div className='wrapper'>
              <Pattern pattern={"/static/pattern_2.png"}>
                <h1>{post.title}</h1>
                <div
                  className='description color1'
                  dangerouslySetInnerHTML={{
                    __html: post.body || ""
                  }}
                />
              </Pattern>
              <style jsx>{`
                margin-top: 12vh;
              `}</style>
            </div>
          )
        }}
      </Query>
    </App>
  )
}
