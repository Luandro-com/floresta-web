import TagItem from "./TagItem"
import colors from "../lib/colors"

export default ({ name, description, media, photos, mapLink }) => {
  return (
    <main>
      {media && <div className='media' />}

      <div className='info'>
        <div className='info-container'>
          <h1>{name}</h1>
          <div className='description color1 ql-content'>
            <div>
              <br/>
              {mapLink && <iframe
                src={mapLink}
                width='640'
                height='480'
              />}
              <br/>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: description
              }}
            />
            <div>
              {photos.map(photo => (
                <div>
                  <img src={photo} />
                  <br/>
                  <br/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        border-radius: 30px;
        background: ${colors.light};
        margin: 0 auto;
        max-width: 100%;
        h1 {
          color: ${colors.dark};
          font-weight: 900;
          text-align: center;
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
        .tag-list {
          padding-top: 25px;
          display: flex;
          flex-flow: row wrap;
          align-items: flex-start;
          justify-content: flex-start;
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
