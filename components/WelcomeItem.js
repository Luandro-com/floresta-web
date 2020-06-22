import { animateScroll as scroll } from 'react-scroll'
import Arrows from './Arrows'
import colors from '../lib/colors'

export default ({ background, text, arrow, link, linkText }) => {
  let viewSize = 800
  if (process.browser) {
    viewSize = window.innerHeight - 50
  }
  return (
    <div className='wrapper'>
      {text ||
        (link && (
          <div className='info'>
            {text && !link && <h2>{text}</h2>}
            {link && linkText && (
              <a href={`/category?slug=${link}`}>
                <h2>{linkText}</h2>
              </a>
            )}
            {arrow && (
              <a onClick={() => scroll.scrollTo(viewSize)}>
                <Arrows animate />
              </a>
            )}
          </div>
        ))}
      <style jsx>{`
      .wrapper {
        background-color: ${colors.color4};
        background-image: url(${background});
        background-size: cover;
        height: 100%;
        width: 100%;
        backgroundposition: bottom;
        background-size: cover;
        margin-top: 38px;
      }

      a {
				margin-top: -50vh;
			}
			h2 {
				font-weight: 100;
				font-size: 2em;
			}
			.info {
				margin: 0 auto;
				position: relative;
				bottom: -45%;
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
      @media screen and (max-width: 968px) {
        .wrapper {
          margin-top: 100px
        }
      }

      `}</style>
    </div>
  )
}
