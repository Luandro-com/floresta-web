import WelcomeItem from './WelcomeItem'
import Carousel from 'nuka-carousel'
import colors from '../lib/colors'

const Controls = ({ count, current, goToSlide }) => {
  let elements = []
  for (let index = 0; index < count; index++) {
    elements.push(
      <div
        onClick={() => goToSlide(index)}
        style={{
          background: current === index ? colors.color1 : colors.light,
          width: 15,
          height: 15,
          borderRadius: 15,
          margin: '0 5px',
          cursor: 'pointer'
        }}
      />
    )
  }
  return elements
}

export default ({ text, background, arrow, height }) => {
  let viewSize = 800
  if (process.browser) {
    viewSize = window.innerHeight - 50
  }
  return (
    <section>
      {Array.isArray(background) ? (
        <Carousel
          wrapAround
          autoplay
          autoplayInterval={500}
          renderBottomCenterControls={({
            currentSlide,
            goToSlide,
            slideCount
          }) => (
            <div className='bottom-controls'>
              <Controls
                count={slideCount}
                current={currentSlide}
                goToSlide={goToSlide}
              />
            </div>
          )}
          renderCenterLeftControls={({ previousSlide }) => null}
          renderCenterRightControls={({ nextSlide }) => null}
        >
          {background.map(image => (
            <div style={{ background: 'red' }}>
              <WelcomeItem background={image} text={text} arrow={arrow} />
            </div>
          ))}
        </Carousel>
      ) : (
        <WelcomeItem background={background} text={text} arrow={arrow} />
      )}
      <style jsx>{`
        height: ${height || '40vh'};
        .bottom-controls {
          height: 50px;
          width: 200px;
          margin: 0 auto;
          text-align: center;
          position: absolute;
          top: -10vh;
          right: -100px;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}
