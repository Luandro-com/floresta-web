import App from "../components/App"
import Router from "next/router"
import Link from "next/link"

import Welcome from "../components/Welcome"
import CategoryHeader from "../components/CategoryHeader"
import PageLayout from "../components/PageLayout"
import colors from "../lib/colors"

export default () => {
  return (
    <App>
      {/* <Welcome background={"/static/header_categories.png"} height='80vh' /> */}
      <div className='pattern'>
        <div>
          <CategoryHeader color={colors.light2} />
          <PageLayout main='projects' />
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
