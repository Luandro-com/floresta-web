import { Query } from "react-apollo"
import gql from "graphql-tag"
import ErrorMessage from "./ErrorMessage"
import TagItem from "./TagItem"
import Loading from "./Loading"
import colors from "../lib/colors"

export const PROJECT_TAGS = gql`
  query {
    projectTags {
      id
      slug
      name
    }
  }
`
export default function TagList({
  width,
  column,
  titleColor,
  color,
  hoverColor,
  backgroundColor,
  hoverBackgroundColor,
  borderColor,
  weight,
  fontSize,
  padding,
  radius,
  fonSize
}) {
  return (
    <Query query={PROJECT_TAGS}>
      {({ loading, error, data: { projectTags }, fetchMore }) => {
        if (error) return <ErrorMessage message='Error loading posts.' />
        if (loading) return <Loading />
        // const areMorePosts = allPosts.length < _allPostsMeta.count
        return (
          <section>
            <h2>Tags</h2>
            <div className='list'>
              {projectTags.map(tag => (
                <TagItem
                  {...tag}
                  key={tag.id}
                  color={color}
                  hoverColor={hoverColor}
                  backgroundColor={backgroundColor}
                  hoverBackgroundColor={hoverBackgroundColor}
                  borderColor={borderColor}
                  padding={padding}
                  radius={radius}
                  column={column}
                  fontSize={fonSize || "0.8em"}
                />
              ))}
            </div>
            {/* {areMorePosts ? (
							<button onClick={() => loadMorePosts(allPosts, fetchMore)}>
								{' '}
								{loading ? 'Loading...' : 'Show More'}{' '}
							</button>
						) : (
							''
						)} */}
            <style jsx>{`
              max-width: 75%;
              margin: 0 auto;
              section {
                width: 100%;
                text-align: center;
              }
              h2 {
                color: ${titleColor || colors.dark};
                font-weight: ${weight || "inherit"};
                font-size: ${fontSize || "inherit"};
                padding-bottom: 5vh;
                text-decoration: none;
              }
              .list {
                margin: 0 auto;
                width: 80%;
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                justify-content: space-around;
              }
              @media screen and (min-width: 1280px) {
                section {
                  width: ${width || "100%"};
                  text-align: ${column ? "left" : "center"};
                  padding-top: 10vh;
                }
                .list {
                  flex-flow: ${column ? "column" : "row wrap"};
                  width: 100%;
                }
              }
            `}</style>
          </section>
        )
      }}
    </Query>
  )
}

// function loadMorePosts(allPosts, fetchMore) {
// 	fetchMore({
// 		variables: {
// 			skip: allPosts.length
// 		},
// 		updateQuery: (previousResult, { fetchMoreResult }) => {
// 			if (!fetchMoreResult) {
// 				return previousResult;
// 			}
// 			return Object.assign({}, previousResult, {
// 				// Append the new posts results to the old one
// 				allPosts: [ ...previousResult.allPosts, ...fetchMoreResult.allPosts ]
// 			});
// 		}
// 	});
// }
