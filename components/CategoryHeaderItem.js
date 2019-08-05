import React from "react"
import AnyImage from "./AnyImage"
import colors from "../lib/colors"

export default function CategoryHeaderItem({ slug, name, icon, current }) {
  const [color, setColor] = React.useState(colors.dark)
  return (
    <a
      href={`category?slug=${slug}`}
      onMouseOver={() => setColor(colors.light2)}
      onMouseLeave={() => setColor(colors.dark)}
    >
      <div className='container'>
        <div className='icon'>
          <AnyImage
            src={icon}
            // marginTop={14}
            size='42px'
            color={current ? colors.light2 : color}
          />
        </div>
        <h3>{name}</h3>
      </div>
      <style jsx>{`
        position: relative;
        top: 1vh;
        color: ${colors.dark};
        .container {
          padding: 0 5px;
          display: flex;
          flex-flow: column;
          align-items: center;
        }
        h3 {
          font-size: 1em;
          text-align: center;
          font-weight: 600;
        }
        .icon {
          background: ${current ? colors.dark : "none"};
          border: 2px solid ${colors.dark};
          height: 70px;
          width: 70px;
          border-radius: 50%;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        }
        .container:hover .icon {
          background: ${colors.dark};
        }
      `}</style>
    </a>
  )
}
