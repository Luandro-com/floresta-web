import { useState } from "react"
import VillageItem from "./VillageItem"
import Gallery from "./Gallery"
import colors from "../lib/colors"

const villageHeight = 150

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
        className='description color1'
        dangerouslySetInnerHTML={{
          __html: text || ""
        }}
      />
      <iframe
        src='https://www.google.com/maps/d/embed?mid=1W28Oyr7k4muzJp270p83OX_rIfc'
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
