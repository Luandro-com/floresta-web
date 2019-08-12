import { useState, useCallback } from "react"
import colors from "../lib/colors"
import Dialog from "./Dialog"
import Gallery from "./Gallery"

export default function ProjectItem({ height, slug, name, mapLink, photos }) {
  const [modalOpen, setModal] = useState(false)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = () => {
    // setCurrentImage(index)
    setViewerIsOpen(true)
  }

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  return (
    <div>
      <a href={`project?slug=${slug}`} className='media-l' />
      <a href={`project?slug=${slug}`} className='media-link'>
        <div className='media' />
      </a>
      <div className='info'>
        <div className='info-container'>
          <h4>
            <a href={`project?slug=${slug}`}>{name}</a>
          </h4>
          {/* <div
            className='description color1'
            style={{ color: colors.color1 }}
            dangerouslySetInnerHTML={{
              __html: intro || ""
            }}
          /> */}
          <div className='list'>
            {mapLink && (
              <div className='button' onClick={() => setModal(true)}>
                Mostrar no mapa
                <Dialog open={modalOpen} close={() => setModal(false)}>
                  <iframe src={mapLink} width='640' height='720' />
                </Dialog>
              </div>
            )}
            {photos.length > 0 && (
              <div className='button' onClick={() => openLightbox()}>
                Mostrar fotos
                <Gallery
                  photos={photos}
                  closeLightbox={closeLightbox}
                  viewerIsOpen={viewerIsOpen}
                  currentImage={currentImage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
		background: ${colors.light};
		width: 100%;
		margin: 15px auto;
		border-radius: 35px;
		a {
			color: ${colors.dark};
			font-size: 1em;
			font-weight: 900;
		}
		p {
			color: ${colors.color1};
		}
		h4 {
			margin: 0 auto 1vh;
		}
		.media {
			border-radius: 35px 35px 0 0;
			background-image: url("${photos[0]}");
			background-size: cover;
			height: 350px;
			width: 100%;
		}
		.info {
			width: 100%;
		}
		.info-container {
      padding: 30px 0;
			width: 90%;
			margin: 0 auto;
			display: flex;
			flex-flow: column;
			align-items: center;
      /* justify-content: space-around; */
		}
		.list {
			display: flex;
			flex-flow: row;
			align-items: center;
			justify-content: flex-start;
		}
    .media-l {
      display: none;
    }
		.button {
			width: 40%;

			border: 1px solid ${colors.color1};
			border-radius: 5px;
			color: ${colors.color1};
			text-align: center;
			padding: 3px 10px;
			margin: 0 auto;
      text-align: center;
			cursor: pointer;
		}
		.button:hover {
			background: ${colors.color1};
			color: ${colors.light};
		}
		@media screen and (min-width: 845px) {
			margin: 0 auto;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			.media, .media-link {
				display: none;
			}
			.media-l {
				display: inherit;
				border-radius: 35px 0 0 35px;
				background-image: url("${photos[0]}");
				background-size: cover;
				height: ${height}px;
				width: 60%;
			}
			.info {
				width: 40%;
			}
      	}
	`}</style>
    </div>
  )
}
