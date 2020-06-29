import React from "react"
import AnyImage from "./AnyImage"
import colors from "../lib/colors"

export default function CategoryHeaderItem({
  slug,
  name,
  icon,
  current,
  color
}) {
  const [currentColor, setColor] = React.useState(color || colors.dark)
  return (
    <a
      href={`category?slug=${slug}`}
      onMouseOver={() => setColor(color ? colors.dark : colors.light2)}
      onMouseLeave={() => setColor(color || colors.dark)}
    >
      <div className='container'>
        <div className='icon'>
          <AnyImage
            src={icon}
            // marginTop={14}
            size='80px'
            color={
              current ? (color ? colors.dark : colors.light2) : currentColor
            }
          />
        </div>
        <h3>{name}</h3>
      </div>
      <style jsx>{`
        position: relative;
        top: 1vh;
        color: ${color || colors.dark};
        margin: 5px auto;
        width: 100%;
        .container {
          padding: 0 5px;
          display: flex;
          align-items: center;
          flex-flow: row;
          justify-content: flex-start;
        }
        h3 {
          font-size: 1.4em;
          line-height: 1em;
          text-align: center;
          font-weight: 600;
          width: 50%;
        }
        .icon {
          background: ${current ? color || colors.dark : "none"};
          border: 2px solid ${color || colors.dark};
          height: 10vh;
          width: 10vh;
          border-radius: 50%;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        }
        .container:hover .icon {
          background: ${color || colors.dark};
        }
        @media screen and (min-width: 640px) {
          width: 45%;
          .container {
            flex-flow: column;
          }
          h3 {
            width: 100%;
          }
        }
        @media screen and (min-width: 720px) {
          h3 {
            width: 70%;
          }
          .container {
            width: 80%;
          }
        }
      `}</style>
    </a>
  )
}
