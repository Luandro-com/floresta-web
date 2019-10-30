import { useState } from 'react'
import TagItem from './TagItem'
import colors from '../lib/colors'
import Dialog from './Dialog'

export default function ProjectItem ({
  height,
  slug = '',
  name = 'Projeto',
  media = '',
  tags = [],
  description = ''
}) {
  const [modalOpen, setModal] = useState(false)
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
              __html: description ? description.substring(0, 50) : ''
            }}
          />
          <div className='tag-list'>
            <TagList tags={tags} limit={3} />
            {tags.length > 3 && (
              <div className='tag-more' onClick={() => setModal(true)}>
                Mostrar todas
              </div>
            )}
          </div>
        </div>
      </div>
      <Dialog open={modalOpen} close={() => setModal(false)}>
        <TagList tags={tags} />
      </Dialog>
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
			height: ${height || '350'}px;
			width: 100%;
		}
		.info {
			width: 100%;
		}
		.info-container {
      padding: 15px 0;
			width: 90%;
			margin: 0 auto;
			display: flex;
			flex-flow: column;
			align-items: flex-start;
		}
		.description {
			display: block;
			max-height: ${height || '350'}ox;
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
		.tag-more {
			width: 100px;
			border: 1px solid ${colors.color1};
			border-radius: 5px;
			color: ${colors.color1};
			text-align: center;
			padding: 3px 10px;
			margin: 0 auto;
			cursor: pointer;
		}
		.tag-more:hover {
			background: ${colors.color1};
			color: ${colors.light};
		}
		@media screen and (min-width: 845px) {
			/* margin: 10px auto; */
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			margin: 0 auto;
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
			.info-container {
				padding: 0;
			}
			.info {
				/* height: ${height - 30}px; */
				width: 40%;
			}
      	}
	`}</style>
    </div>
  )
}

const TagList = ({ tags, limit }) => (
  <div>
    {tags
      .filter((t, key) => (limit ? key < limit : key))
      .map(tag => (
        <TagItem
          key={tag.id}
          {...tag}
          color={colors.light}
          backgroundColor={colors.color1}
          padding='3px 10px'
          radius={5}
          margin={'10px 2px'}
          fontSize={'1em'}
        />
      ))}
    <style jsx>{`
      display: flex;
      flex-flow: row wrap;
    `}</style>
  </div>
)
