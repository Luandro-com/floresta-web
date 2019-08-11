import colors from "../lib/colors"
import { animateScroll as scroll } from "react-scroll"
import Arrows from "./Arrows"
import AnyImage from "./AnyImage"

export default ({ text, background, arrow, height, logo }) => {
  let viewSize = 800
  if (process.browser) {
    viewSize = window.innerHeight - 50
  }
  return (
    <section
      style={{
        backgroundColor: colors.dark,
        backgroundImage: `url(${background})`,
        height: height || "30vh",
        backgroundPosition: "bottom",
        backgroundSize: "cover"
      }}
    >
      {/* <div className='logo'>
        <AnyImage src={logo} />
      </div> */}
      <div className='info'>
        <h2>{text && text}</h2>
        {arrow && (
          <a onClick={() => scroll.scrollTo(viewSize)}>
            <Arrows animate />
          </a>
        )}
      </div>
      <style jsx>{`
			a {
				margin-top: -50vh;
			}
			.info {
				margin: 0 auto;
				position: relative;
				bottom: -65vh;
				width: 80%;
				text-align: center;
				text-transform: uppercase;
				font-size: 1em;
				cursor: pointer;
				border-radius: 10px;
				box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.4);
        background: rgba(0, 0, 0, 0.4);
			}
			.logo {
				width: 80%;
				position: absolute;
				top: 30vh;
				left: 50%;
				transform: translateX(-50%);
			}
			@media screen and (min-width: 480px) {
				.logo {
					width: 350px;
				}
				.info {
					width: 50%;
					font-size: 18px;
				}
			@media screen and (min-width: 968px) {
				.logo {
					display: none;
				}
				.info {
					font-size: 24px;
				}
			}
			@media screen and (min-width: 1024px) {
				.info {
					font-size: 30px;
				}
			}
		`}</style>
    </section>
  )
}
