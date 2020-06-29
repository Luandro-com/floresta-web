import { useState } from "react"
import VillageItem from "./VillageItem"
import Gallery from "./Gallery"
import colors from "../lib/colors"

const villageHeight = 250

export default ({ villages, text }) => {
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = photos => {
    if (photos.length > 0) {
      setViewerIsOpen(photos)
    }
  }

  const closeLightbox = () => {
    console.log("closgin")
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  return (
    <div>
      <div
        className='description ql-content color1'
        dangerouslySetInnerHTML={{
          __html: text || ""
        }}
      />
      <iframe
        src='https://afp.maps.arcgis.com/apps/webappviewer/index.html?id=98614b1d13ee4e0cac0477d214a4fc4a'
        width='640'
        height='480'
      />
      <div className='list'>
        {villages &&
          villages.map(village => (
            <VillageItem
              height={villageHeight}
              {...village}
              key={village.id}
              openLightbox={openLightbox}
            />
          ))}
        <Gallery
          photos={viewerIsOpen || []}
          closeLightbox={closeLightbox}
          viewerIsOpen={viewerIsOpen && viewerIsOpen.length > 0}
          currentImage={currentImage}
        />
      </div>
      <style jsx>{`
        width: 100%;
        margin: 0 auto;
        .description {
          padding: 5vh 0;
          color: ${colors.dark};
        }
        .list {
          padding-top: 5vh;
          display: flex;
          flex-flow: column;
          justify-content: space-around;
          height: ${villages.length * villageHeight + villages.length * 35}px;
        }
        @media screen and (min-width: 845px) {
          display: flex;
          flex-flow: column;
          justify-content: space-around;
        }
      `}</style>
    </div>
  )
}
