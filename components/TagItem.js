import colors from "../lib/colors"

export default function TagItem({
  slug,
  name,
  color,
  hoverColor,
  backgroundColor,
  hoverBackgroundColor,
  borderColor,
  padding,
  radius,
  column,
  margin
}) {
  return (
    <a href={`tag?slug=${slug}`}>
      <div>{name}</div>
      <style jsx>{`
        a {
          margin: ${margin ? margin : column ? "10px" : 0} auto;
        }
        div {
          cursor: pointer;
          border: 1px solid ${borderColor || backgroundColor || colors.light};
          background: ${backgroundColor || colors.light};
          border-radius: ${radius || "35"}px;
          padding: ${padding || "10px 18px"};
          text-transform: uppercase;
          font-weight: 100;
          color: ${color || colors.light};
        }
        div:hover {
          background: ${hoverBackgroundColor || colors.light};
          border: 1px solid
            ${hoverBackgroundColor || backgroundColor || colors.light};
          color: ${hoverColor || colors.dark2};
        }
      `}</style>
    </a>
  )
}
