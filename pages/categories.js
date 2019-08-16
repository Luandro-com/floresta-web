import { useQuery } from "react-apollo"
import gql from "graphql-tag"

import App from "../components/App"
import Welcome from "../components/Welcome"
import CategoryList from "../components/CategoryList"
import TagList from "../components/TagList"
import colors from "../lib/colors"

export const HTML = gql`
  query {
    content {
      categoriesHtml
    }
  }
`

export default () => {
  const {
    data: { content },
    loading,
    error
  } = useQuery(HTML)
  return (
    <App>
      <Welcome background={"/static/default.png"} height='80vh' />
      {!loading && !error && content && (
        <div className='info'>
          <div
            className={"description light medium"}
            dangerouslySetInnerHTML={{
              __html: content.categoriesHtml
            }}
          />
        </div>
      )}
      <div className='pattern'>
        <CategoryList noTitle />
        <TagList
          fontSize='2em'
          color={colors.light}
          hoverColor={colors.color1}
          backgroundColor={"none"}
          hoverBackgroundColor={colors.light}
          borderColor={colors.light}
          radius={5}
        />
      </div>
      <style jsx>{`
        .pattern {
          background: ${colors.color4};
          background-image: url("/static/pattern_3.png");
          background-repeat: round;
          padding-bottom: 100px;
        }
        .info {
          background: ${colors.color4};
          padding: 50px 0;
        }
        .description {
          width: 90%;
          margin: 0 auto;
        }
        @media screen and (min-width: 640px) {
          .description {
            width: 80%;
          }
        }
        @media screen and (min-width: 1024px) {
          .description {
            max-width: 968px;
          }
        }
      `}</style>
    </App>
  )
}
