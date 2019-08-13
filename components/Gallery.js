import React, { useState, useCallback } from "react"
import Carousel, { Modal, ModalGateway } from "react-images-close"

const customStyles = {
  container: (base, state) => ({
    ...base,
    zIndex: 500
  }),
  header: (base, state) => ({
    ...base,
    paddingTop: "15vh"
  }),
  view: base => ({
    ...base
    // none of react-images styles are passed to <View />
    // height: 400,
    // width: 600
  }),
  footer: (base, state) => {
    const opacity = state.interactionIsIdle ? 0 : 1
    const transition = "opacity 300ms"

    return { ...base, opacity, transition }
  }
}

export default ({ photos, closeLightbox, viewerIsOpen, currentImage }) => {
  const formatedPhotos = photos.map(p => {
    return {
      src: p
    }
  })
  return (
    <div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              styles={customStyles}
              currentIndex={currentImage}
              views={formatedPhotos}
              backdropClosesModal={true}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
