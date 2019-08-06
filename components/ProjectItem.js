import TagItem from "./TagItem"
import colors from "../lib/colors"

export default function ProjectItem({
  height,
  slug,
  name,
  media,
  tags,
  description
}) {
  return (
    <div>
      <a href={`project?slug=${slug}`} className='media-l' />
      <a href={`project?slug=${slug}`} className='media-link'>
        <div className='media' />
      </a>
      <div className='info'>
        <div className='info-container'>
          <h4>
            <a href={`project?slug=${slug}`}>{name}</a>
          </h4>
          <div
            className='description color1'
            style={{ color: colors.color1 }}
            dangerouslySetInnerHTML={{
              __html: description ? description.substring(0, 150) : ""
            }}
          />
          <div className='tag-list'>
            {tags.map(tag => (
              <TagItem
                key={tag.slug}
                {...tag}
                color={colors.light}
                backgroundColor={colors.color1}
                padding='2px 5px'
                radius={5}
                margin={"0 2px"}
                fontSize={"0.6em"}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
		background: ${colors.light};
		width: 100%;
		margin: 15px auto;
		border-radius: 35px;
		a {
			color: ${colors.dark};
			font-size: 1em;
			font-weight: 900;
		}
		p {
			color: ${colors.color1};
		}
		h4 {
			margin: 0 auto 1vh;
		}
		.media {
			border-radius: 35px 35px 0 0;
			background-image: url("${media}");
			background-size: cover;
			height: 350px;
			width: 100%;
		}
		.info {
			width: 100%;
		}
		.info-container {
      padding: 30px 0;
			width: 90%;
			margin: 0 auto;
			display: flex;
			flex-flow: column;
			align-items: flex-start;
		}
		.tag-list {
			display: flex;
			flex-flow: row;
			align-items: center;
			justify-content: flex-start;
		}
    .media-l {
      display: none;
    }
		@media screen and (min-width: 845px) {
			margin: 0 auto;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			.media, .media-link {
				display: none;
			}
			.media-l {
				display: inherit;
				border-radius: 35px 0 0 35px;
				background-image: url("${media}");
				background-size: cover;
				height: ${height}px;
				width: 60%;
			}
			.info {
				width: 40%;
			}
      	}
	`}</style>
    </div>
  )
}
