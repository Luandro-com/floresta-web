import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import ProjectItem from './ProjectItem';
import BackButton from './BackButton';
import TagList from './TagList';

export const CATEGORY = gql`
	query($slug: String!) {
		projectCategories(slug: $slug) {
			slug
			description
			projects {
				id
				slug
				name
				media
			}
		}
	}
`;
export default function CategoryLayout({ slug }) {
	return (
		<Query query={CATEGORY} variables={{ slug }}>
			{({ loading, error, data: { projectCategories }, fetchMore }) => {
				if (error) return <ErrorMessage message="Error loading posts." />;
				if (loading) return <div>Loading</div>;
				// const areMorePosts = allPosts.length < _allPostsMeta.count
				return (
					<section>
						<BackButton />
						<div>{projectCategories[0].description}</div>
						<h2>Projetos</h2>
						<ul>
							{projectCategories.projects &&
								projectCategories.projects.map((project) => <ProjectItem {...project} key={news.id} />)}
						</ul>
						{/* {areMorePosts ? (
							<button onClick={() => loadMorePosts(allPosts, fetchMore)}>
								{' '}
								{loading ? 'Loading...' : 'Show More'}{' '}
							</button>
						) : (
							''
						)} */}
						<TagList />
						<style jsx>{`
							section {
								padding-bottom: 20px;
							}
							li {
								display: block;
								margin-bottom: 10px;
							}
							div {
								align-items: center;
								display: flex;
							}
							a {
								font-size: 14px;
								margin-right: 10px;
								text-decoration: none;
								padding-bottom: 0;
								border: 0;
							}
							span {
								font-size: 14px;
								margin-right: 5px;
							}
							ul {
								margin: 0;
								padding: 0;
							}
							button:before {
								align-self: center;
								border-style: solid;
								border-width: 6px 4px 0 4px;
								border-color: #ffffff transparent transparent transparent;
								content: '';
								height: 0;
								margin-right: 5px;
								width: 0;
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
