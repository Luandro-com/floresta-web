import ReactSVG from 'react-svg'
import colors from '../lib/colors'

export default ({ src, size, width, height, color, marginTop }) => {
  console.log('color', color)
  if (src && src.split('.')[src.split('.').length - 1] === 'svg') {
    return (
      <ReactSVG
        src={src}
        style={{
          color: color || colors.light,
          marginTop: marginTop || 0,
          width: size || width,
          height,
          fill: color || colors.light,
          ' svg': {
            height: size || width,
            width: size || width
          },
          ' rect': {
            fill: color || colors.light,
            height: size || width,
            stroke: color || colors.light,
            width: size || width
          }
        }}
      />
    )
  } else {
    return <img src={src} style={{ width: size }} />
  }
}
