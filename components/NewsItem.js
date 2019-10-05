import FitText from './FitText'
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
  post
}) {
  const isPost = !!(post && post.id)
  return (
    <a
      target={isPost ? '' : '_blank'}
      href={isPost ? `/blog?${slug ? `slug=${slug}` : `id=${id}`}` : link || ''}
    >
      <div className='container'>
        <div className='media' />
        <div className='title'>
          {/* <FitText maxFontSize={22} compressor={2}> */}
            <h3>{title || ''}</h3>
          {/* </FitText> */}
        </div>
        <div
          className='description dark'
          dangerouslySetInnerHTML={{
            __html:
              intro ||
              (description ? description.substring(0, 100) + '...' : '')
          }}
        />
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
        @media screen and (max-width: 1023px) {
          margin: 40px auto;
          .media, .title {
            margin-top: -40px;
          }

        }
			`}</style>
    </a>
  )
}
