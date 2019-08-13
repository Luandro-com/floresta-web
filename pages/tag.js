import App from "../components/App"
import Router from "next/router"

import CategoryHeader from "../components/CategoryHeader"
import PageLayout from "../components/PageLayout"
import colors from "../lib/colors"

export default () => {
  let slug = null
  if (Router.router) {
    slug = Router.router.query.slug
  }
  return (
    <App>
      {/* <Welcome background={"/static/header_categories.png"} height='80vh' /> */}
      <div className='pattern'>
        <div>
          <PageLayout main='projects' tags slug={slug} />
        </div>
      </div>
      <style jsx>{`
        .pattern {
          background: ${colors.dark2};
          background-image: url("/static/pattern_2.png");
          background-repeat: round;
          margin-top: -5vh;
          padding: 15vh 0;
        }
      `}</style>
    </App>
  )
}
