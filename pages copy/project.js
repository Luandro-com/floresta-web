import Router from "next/router"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import ErrorMessage from "../components/ErrorMessage"

import App from "../components/App"
import Welcome from "../components/Welcome"
import CategoryHeader from "../components/CategoryHeader"
import PageLayout from "../components/PageLayout"
import colors from "../lib/colors"

export const PROJECT = gql`
  query($slug: String) {
    project(slug: $slug) {
      id
      name
      photos
      media
      description
      tags {
        id
        slug
        name
      }
      category {
        slug
      }
    }
  }
`

export default () => {
  let slug = null
  if (Router.router) {
    slug = Router.router.query.slug
  }
  return (
    <App>
      <Query query={PROJECT} variables={{ slug }}>
        {({ loading, error, data: { project } }) => {
          if (error) return <ErrorMessage message='Error loading posts.' />
          if (loading) return <div>Loading</div>
          return (
            <div>
              <Welcome
                background={project ? project.media : ""}
                height='80vh'
              />
              <div className='pattern'>
                {slug ? (
                  <div>
                    <CategoryHeader slug={project.category.slug} />
                    <PageLayout project={project} />
                  </div>
                ) : (
                  <span>Loading...</span>
                )}
              </div>
            </div>
          )
        }}
      </Query>
      <style jsx>{`
        .pattern {
          background: ${colors.light2};
          // background-image: url("/static/grafismo.png");
          background-repeat: round;
          margin-top: -5vh;
          padding-bottom: 20vh;
        }
      `}</style>
    </App>
  )
}
