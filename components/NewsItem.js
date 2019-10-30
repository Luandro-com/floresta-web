import SmallTagList from './SmallTagList'
import colors from '../lib/colors'

export default function NewsItem ({
  id,
  title,
  slug,
  media,
  intro,
  description,
  link,
  width,
  post,
  tags
}) {
  const isPost = !!(post && post.id)
  return (
    <div className='container'>
      <a
        target={isPost ? '' : '_blank'}
        href={
          isPost ? `/blog?${slug ? `slug=${slug}` : `id=${id}`}` : link || ''
        }
      >
        <div className='media' />
        <div className='title'>
          <h3>{title || ''}</h3>
        </div>
      </a>
      <div
        className='description dark'
        dangerouslySetInnerHTML={{
          __html:
            intro || (description ? description.substring(0, 100) + '...' : '')
        }}
      />
      <div className='tag-wrapper'>
        <div className='tag-container'>
          <SmallTagList tags={tags} />
        </div>
      </div>
      <style jsx>{`
        width: ${width || '100%'};
        margin: 15px auto;
				.container {
					background: ${colors.light};
					display: flex;
					flex-flow: column;
					border-radius: 20px;

				}
				.media {
          margin-top: -15px;
					height: 250px;
					background-image: url("${media || ''}");
					background-size: cover;
					border-radius: 20px 20px 0 0;
				}
				.title {
          text-align: center;
          height: 60px;
          margin-top: -15px;
          padding: 5px 0 15px;
					width: 100%;
					background: ${colors.dark};
				}
        h3 {
					/* text-align: left; */
					/* padding-left: 3vw; */
					font-size: 1.4em;
          /* white-space: nowrap; */
          width: 98%;
					/* font-weight: 600; */
				}
				.description {
					color: ${colors.dark};
					height: 300px;
					text-align: left;
					width: 90%;
					margin: 0 auto;
				}
        .tag-wrapper {
          height: 80px;
          width: 100%;
        }
        .tag-container {
          width: 90%;
          margin: 0 auto;
        }
        @media screen and (max-width: 1023px) {
          margin: 40px auto;
          .media, .title {
            margin-top: -40px;
          }

        }
			`}</style>
    </div>
  )
}
