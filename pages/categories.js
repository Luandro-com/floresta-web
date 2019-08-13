import App from "../components/App"
import Pattern from "../components/Pattern"
import CategoryList from "../components/CategoryList"
import TagList from "../components/TagList"
import colors from "../lib/colors"

export default () => (
  <App>
    <div className='pattern'>
      <div>
        {" "}
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
