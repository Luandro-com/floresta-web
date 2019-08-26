import colors from '../lib/colors'
import AnyImage from './AnyImage'
const boxHeight = 120
const boxWidth = 250
const boxWidthB = 360
const boxWidthX = 480
const boxHeightB = 180

export default function CategoryItem ({ slug, name, icon, media }) {
  return (
    <div className='container'>
      <a href={`category?slug=${slug}`}>
        <div className='images' style={{ backgroundImage: `url(${media})` }}>
          <div className='icon'>
            <AnyImage src={icon} width={boxHeight - 50} />
          </div>
        </div>
        <div className='info'>
          <h3>{name}</h3>
        </div>
      </a>
      <style jsx>{`
        .container {
          margin: 25px auto;
          cursor: pointer;
        }
        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          width: ${boxWidth - 30}px;
          height: ${boxHeight}px;
          background: ${colors.light};
        }
        h3 {
          font-size: 1.4em;
          color: ${colors.dark};
          font-weight: 600;
          text-transform: uppercase;
        }
        .images {
          position: relative;
          left: -15px;
          width: 60%;
          height: ${boxHeight}px;
          border-radius: 30px 0 0 30px;
          background-size: cover;
          background-repeat: no-repeat;
          display: none;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
        }
        .icon {
          position: relative;
          left: -${boxWidth / 8}px;
          width: ${boxHeight - 20}px;
          height: ${boxHeight - 20}px;
          background: ${colors.dark};
          border-radius: ${boxHeight}px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .info {
          position: relative;
          left: -8px;
          width: 90%;
          height: ${boxHeight}px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        @media screen and (min-width: 480px) {
          .container {
            margin: 20px auto;
          }
          a {
            width: ${boxWidthX}px;
            height: ${boxHeightB}px;
          }
          .images {
            height: ${boxHeightB}px;
            display: flex;
          }
          .icon {
            left: 30px;
          }
          .info {
            width: 40%;
            text-align: left;
          }
        }
        @media screen and (min-width: 968px) {
          .container {
            margin: 40px;
          }
          a {
            width: ${boxHeightB}px;
            min-width: 35vw;
          }
          .images {
            height: ${boxHeightB}px;
          }
          .icon {
            left: -${boxWidthB / 8}px;
          }
        }
        /* @media screen and (min-width: 1080px) {
          .container {
            width: 90%;
          }
          a {
            width: 25vw;
          }
        } */
      `}</style>
    </div>
  )
}
