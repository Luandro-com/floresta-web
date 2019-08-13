import App from "../components/App"
import HomeWelcome from "../components/HomeWelcome"
import CategoryList from "../components/CategoryList"
import TagList from "../components/TagList"
import NewsList from "../components/NewsList"
import colors from "../lib/colors"

export default () => (
  <App>
    <HomeWelcome />
    <div className='pattern'>
      <CategoryList />
      <NewsList />
      <TagList
        fontSize='2em'
        color={colors.light}
        hoverColor={colors.color1}
        backgroundColor={"none"}
        hoverBackgroundColor={colors.light}
        borderColor={colors.light}
        radius={5}
        weight={900}
      />
    </div>
    <style jsx>{`
      .pattern {
        background: ${colors.dark2};
        background-image: url("/static/pattern_2.png");
        background-repeat: round;
        margin-top: -5vh;
        padding-bottom: 20vh;
      }
    `}</style>
  </App>
)
