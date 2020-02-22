import colors from "../lib/colors"
import AnyImage from "./AnyImage"

export default function VillageItem({
  height,
  slug,
  name,
  media,
  photos,
  openLightbox
}) {
  return (
    <div onClick={() => openLightbox(photos)}>
      <div className='media'>
        <div className='photo-count' onClick={() => openLightbox(photos)}>
          {photos.length}{" "}
          <AnyImage
            src='/static/image.png'
            color={colors.light}
            size={"25px"}
          />
        </div>
      </div>
      <div className='info'>
        <div className='info-container'>
          <h4>
            <a href={`project?slug=${slug}`}>{name}</a>
          </h4>
        </div>
      </div>
      <style jsx>{`
		background: ${colors.light};
		width: 100%;
    margin: 0 auto;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		border-radius: 35px;
    cursor: pointer;
		a {
			color: ${colors.dark};
			font-size: 1em;
			font-weight: 900;
		}
		p {
			color: ${colors.color1};
		}
		h4 {
			margin: 0 auto;
      background: none;
      position: relative;
      left: 0;
      width: 100px;
      font-size: 2em;
		}
    .media {
      display: inherit;
      border-radius: 35px 0 0 35px;
      background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5), rgba(0,0,0,0.6), black), url("${
        photos[0]
      }");
      background-blend-mode: hard-light;
      background-size: cover;
      height: ${height}px;
      width: 60%;
      transition: background-image 1s ease-in-out;
      }
    .media:hover {
      background-image:url("${photos[0]}");
      background-blend-mode: none;
    }
    .photo-count {
      position: relative;
      width: 50px;
      height: 25px;
      color: ${colors.light};
      background: ${colors.dark};
      left: 50%;
      padding: 10px 25px;
      text-align: center;
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
    }
    .info {
      width: 40%;
    }
	`}</style>
    </div>
  )
}
