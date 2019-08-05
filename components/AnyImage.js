import ReactSVG from "react-svg"
import colors from "../lib/colors"

export default ({ src, size, width, height, color, marginTop }) => {
  if (src && src.split(".")[src.split(".").length - 1] === "svg") {
    return (
      <ReactSVG
        src={src}
        style={{
          marginTop: marginTop || 0,
          width: size || width,
          height,
          fill: color || colors.light,
          " svg": {
            height: size || width,
            width: size || width
          },
          " rect": {
            fill: "aqua",
            height: size || width,
            stroke: "red",
            width: size || width
          }
        }}
      />
    )
  } else {
    return <img src={src} style={{ width: size }} />
  }
}
