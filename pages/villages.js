import App from "../components/App"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import ErrorMessage from "../components/ErrorMessage"
import Loading from "../components/Loading"
import Welcome from "../components/Welcome"
import VillageList from "../components/VillageList"

import colors from "../lib/colors"

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
          console.log(content)
          return (
            <div className='wrapper'>
              {/* <Welcome
                background={"/static/header_categories.png"}
                height='80vh'
              /> */}
              <div className='pattern'>
                <div className='container'>
                  <VillageList
                    villages={content.villages}
                    text={content.villageHtml}
                  />
                </div>
              </div>
              <style jsx>{`
                padding-top: 10vh;
                .pattern {
                  background: ${colors.light2};
                  // background-image: url("/static/grafismo.png");
                  background-repeat: round;
                  margin-top: -5vh;
                  padding-bottom: 20vh;
                }
                .container {
                  margin: 0 auto;
                  width: 90%;
                }
                iframe {
                  width: 100%;
                  margin: 30px auto;
                }
                @media screen and (min-width: 1024px) {
                  .container {
                    max-width: 968px;
                  }
                }
              `}</style>
            </div>
          )
        }}
      </Query>
    </App>
  )
}
