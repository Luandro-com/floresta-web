import App from "../components/App"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import ErrorMessage from "../components/ErrorMessage"
import Loading from "../components/Loading"
import Welcome from "../components/Welcome"
import colors from "../lib/colors"

export const DESCRIPTION = gql`
  query {
    content {
      villageHtml
      villages {
        photos
        slug
        name
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
          return (
            <div className='wrapper'>
              <Welcome
                background={"/static/header_categories.png"}
                height='80vh'
              />
              <div className='pattern'>
                <div className='container'>
                  <h1>Aldeias</h1>
                  <div
                    className='description color1'
                    dangerouslySetInnerHTML={{
                      __html:
                        content && content.villageText
                          ? content.villageText
                          : ""
                    }}
                  />
                  <iframe
                    src='https://www.google.com/maps/d/embed?mid=1W28Oyr7k4muzJp270p83OX_rIfc'
                    width='640'
                    height='720'
                  />
                  {content.villages.map(village => (
                    <h1>{village.name}</h1>
                  ))}
                </div>
              </div>
              <style jsx>{`
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
