import Router from "next/router"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import ErrorMessage from "../components/ErrorMessage"
import Loading from "../components/Loading"

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
      intro
      description
      tags {
        id
        slug
        name
      }
      categories {
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
          if (loading) return <Loading />
          return (
            <div>
              {/* <Welcome
                background={project ? project.media : ""}
                height='80vh'
              /> */}
              <div className='pattern'>
                {slug ? (
                  <div>
                    {/* <CategoryHeader slug={project.categories.slug} /> */}
                    <PageLayout
                      project={project}
                      tagTitleColor={colors.light}
                    />
                  </div>
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          )
        }}
      </Query>
      <style jsx>{`
        padding-top: 8vh;
        .pattern {
          background: ${colors.dark2};
          background-image: url("/static/pattern_2.png");
          margin: 0 auto;
          background-repeat: round;
          margin-top: -5vh;
          padding-bottom: 20vh;
        }
      `}</style>
    </App>
  )
}
