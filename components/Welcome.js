import WelcomeItem from './WelcomeItem'
import Carousel from 'nuka-carousel'
import colors from '../lib/colors'

const Controls = ({ count, current, goToSlide }) => {
  let elements = []
  for (let index = 0; index < count; index++) {
    elements.push(
      <div
        key={index}
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

export default ({ text, background, arrow, height, links }) => {
  return (
    <section>
      {Array.isArray(background) ? (
        <Carousel
          // wrapAround
          autoplay={background.length > 1}
          autoplayInterval={3000}
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
          {links.map((link, index) => (
            <div key={link.id}>
              <WelcomeItem
                background={background[index]}
                link={`${link.slug}`}
                linkText={link.name}
                arrow={arrow}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <WelcomeItem background={background} text={text} arrow={arrow} />
      )}
      <style jsx>{`
        height: ${height || '40vh'};
        li > div {
          top: -4px
        }
        .bottom-controls {
          height: 50px;
          width: 200px;
          margin: 0 auto;
          text-align: center;
          position: absolute;
          top: -18vh;
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
