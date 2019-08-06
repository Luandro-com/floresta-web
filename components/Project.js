import TagItem from "./TagItem"
import colors from "../lib/colors"

export default ({ name, description, media, tags }) => {
  return (
    <main>
      <div className='media' />
      <div className='info'>
        <h2>{name}</h2>
        <div className='description color1'>
          <span
            dangerouslySetInnerHTML={{
              __html: description
            }}
          />
          <div className='tag-list'>
            {tags.map(tag => (
              <TagItem
                key={tag.id}
                {...tag}
                color={colors.light}
                backgroundColor={colors.color1}
                padding='2px 12px'
                radius={5}
                margin={"0 2px"}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
		border-radius: 30px;
		background: ${colors.light};
		h2 {
			color: ${colors.dark};
			font-weight: 900;	
		}
		.info {
			padding: 35px 10%;
		}
		.media {
			 background: url("${media}");
			 height: 500px;
			 border-radius: 30px 30px 0 0;
		}
		.tag-list {
			padding-top: 25px;
			display: flex;
			flex-flow: row;
			align-items: center;
			justify-content: flex-start;
		}
	  `}</style>
    </main>
  )
}
