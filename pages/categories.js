import App from "../components/App"
import Welcome from "../components/Welcome"
import CategoryList from "../components/CategoryList"
import TagList from "../components/TagList"
import colors from "../lib/colors"

export default () => (
  <App>
    <Welcome background={"/static/header_categories.png"} height='80vh' />
    <div className='pattern'>
      <CategoryList />
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
        background: ${colors.dark2};
        background-image: url("/static/grafismo.png");
        background-repeat: round;
        margin-top: -5vh;
        padding-bottom: 20vh;
      }
    `}</style>
  </App>
)
