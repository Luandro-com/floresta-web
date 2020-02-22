import NewsList from './NewsList'
import SmallTagList from './SmallTagList'

import colors from '../lib/colors'

export default ({ id, slug, title, body, media, tags }) => {
  return (
    <main>
      <div className='media' />
      <div className='info'>
        <div className='info-container'>
          <h1>{title}</h1>
          <div className='description ql-content color1'>
            <span
              dangerouslySetInnerHTML={{
                __html: body
              }}
            />
          </div>
          <SmallTagList tags={tags} />
        </div>
      </div>
      <style jsx>{`
        border-radius: 30px;
        background: ${colors.light};
        margin: 0 auto;
        max-width: 100%;
        h1 {
          color: ${colors.dark};
          font-size: 2em;
          font-weight: 900;
        }
        .info {
          margin: 0 auto;
          padding: 35px 10%;
          max-width: 70%;
        }
        .media {
          background: url("${media}");
          background-size: cover;
          height: 60vh;
          border-radius: 30px 30px 0 0;
        }
        .description {
          min-height: 80vh;
        }
        @media screen and (min-width: 1024px) {
          width: 100%;
          .info-container {
            max-width: 968px;
          }
          .info {
            max-width: 600px;
          }
        }
	  `}</style>
    </main>
  )
}
