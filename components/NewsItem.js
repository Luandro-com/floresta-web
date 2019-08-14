import colors from "../lib/colors"

export default function NewsItem({
  title,
  media,
  intro,
  description,
  link,
  width,
  post
}) {
  console.log("TCL: postUrl", post)
  const postUrl = post && post.id ? post.slug || post.id : null
  return (
    <a
      target={postUrl ? "" : "_blank"}
      href={
        postUrl
          ? `/blog?${post.slug ? `slug=${post.slug}` : `id=${post.id}`}`
          : link || ""
      }
    >
      <div className='container'>
        <div className='media' />
        <div className='title'>
          <h3>{title || ""}</h3>
        </div>
        <div
          className='description dark'
          dangerouslySetInnerHTML={{
            __html: intro
              ? intro
              : description
              ? description.substring(0, 150) + "..."
              : ""
          }}
        />
      </div>
      <style jsx>{`
        width: ${width || "100%"};
        margin: 15px auto;
				h3 {
					text-align: left;
					padding-left: 3vw;
					font-size: 1.6em;
					font-weight: 600;
				}
				.container {
					background: ${colors.light};
					display: flex;
					flex-flow: column;
					border-radius: 20px;

				}
				.media {
          margin-top: -15px;
					height: 300px;
					background-image: url("${media || ""}");
					background-size: cover;
					border-radius: 20px 20px 0 0;
				}
				.title {
          margin-top: -15px;
					width: 100%;
					background: ${colors.dark};
				}
				.description {
					color: ${colors.dark};
					height: 200px;
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
