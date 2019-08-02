import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import TagItem from './TagItem';

export const PROJECT_TAGS = gql`
	query {
		projectTags {
			id
			slug
			name
		}
	}
`;
export default function TagList({ width, column, titleColor, color, weight, fontSize, padding, radius }) {
	return (
		<Query query={PROJECT_TAGS}>
			{({ loading, error, data: { projectTags }, fetchMore }) => {
				if (error) return <ErrorMessage message="Error loading posts." />;
				if (loading) return <div>Loading</div>;
				// const areMorePosts = allPosts.length < _allPostsMeta.count
				return (
					<section>
						<h2>Tags</h2>
						<div className="list">
							{projectTags.map((tag) => (
								<TagItem {...tag} key={tag.id} color={color} padding={padding} radius={radius} />
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
							section {
								width: ${width || '100%'};
								text-align: ${column ? 'left' : 'center'};
								// padding-top: 10vh;
							}
							h2 {
								color: ${titleColor || 'inherit'};
								font-weight: ${weight || 'inherit'};
								font-size: ${fontSize || 'inherit'};
							}
							.list {
								width: 80%;
								display: flex;
								flex-flow: ${column ? 'column' : 'row wrap'};
								align-items: center;
								justify-content: space-around;
							}
						`}</style>
					</section>
				);
			}}
		</Query>
	);
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
