import TagItem from "./TagItem"
import colors from "../lib/colors"

export default ({ name, description, media, tags }) => {
  return (
    <main>
      <div className='media' />
      <div className='info'>
        <div className='info-container'>
          <h2>{name}</h2>
          <div className='tag-list'>
            {tags.map(tag => (
              <TagItem
                key={tag.id}
                {...tag}
                color={colors.light}
                backgroundColor={colors.color1}
                padding='2px 12px'
                radius={5}
                margin={"5px 2px"}
              />
            ))}
          </div>
          <div className='description color1'>
            <span
              dangerouslySetInnerHTML={{
                __html: description
              }}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        border-radius: 30px;
        background: ${colors.light};
        margin: 0 auto;
        h2 {
          color: ${colors.dark};
          font-weight: 900;	
        }
        .info {
          padding: 35px 10%;
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
          .info-container {
            max-width: 968px;
          }
        }
	  `}</style>
    </main>
  )
}
