import colors from '../lib/colors'

export default function TagItem ({
  id,
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
  margin,
  fontSize
}) {
  return (
    <a href={slug ? `tag?slug=${slug}` : `tag?id=${id}`}>
      <div>{name}</div>
      <style jsx>{`
        a {
          margin: ${margin || '10px'} auto;
          font-size: ${fontSize || 'inherit'};
        }
        div {
          cursor: pointer;
          border: 1px solid ${borderColor || backgroundColor || colors.light};
          background: ${backgroundColor || colors.light};
          border-radius: ${radius || '35'}px;
          padding: ${padding || '10px 18px'};
          text-transform: uppercase;
          font-weight: 100;
          text-align: center;
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
