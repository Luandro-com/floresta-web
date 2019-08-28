import App from "../components/App"
import Router from "next/router"

import CategoryHeader from "../components/CategoryHeader"
import PageLayout from "../components/PageLayout"
import colors from "../lib/colors"

export default () => {
  let id = null
  let slug = null
  if (Router.router) {
    if (Router.router.query.slug) {
      slug = Router.router.query.slug
    } else if (Router.router.query.id) {
      id = Router.router.query.id
    }
  }
  return (
    <App>
      {/* <Welcome background={"/static/header_categories.png"} height='95vh' /> */}
      <div className='pattern'>
        <div>
          <PageLayout
            main='projects'
            tags
            slug={slug}
            id={id}
            tagTitleColor={colors.light}
          />
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
