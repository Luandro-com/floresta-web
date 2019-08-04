import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import BackButton from './BackButton';
import TagList from './TagList';
import ProjectList from '../components/ProjectList';
import Project from '../components/Project';

import colors from '../lib/colors';

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
				description
				tags {
					slug
					name
				}
			}
		}
	}
`;
export default function PageLayout({ slug, main }) {
	return (
		<Query query={CATEGORY} variables={{ slug }}>
			{({ loading, error, data: { projectCategories }, fetchMore }) => {
				if (error) return <ErrorMessage message="Error loading posts." />;
				if (loading) return <div>Loading</div>;
				// const areMorePosts = allPosts.length < _allPostsMeta.count
				return (
					<section>
						<div className="back">
							<BackButton to={main === 'projects' ? '/' : '/'} />
						</div>
						{main === 'projects' ? <ProjectList projects={projectCategories[0].projects} /> : <Project />}
						{/* {areMorePosts ? (
							<button onClick={() => loadMorePosts(allPosts, fetchMore)}>
								{' '}
								{loading ? 'Loading...' : 'Show More'}{' '}
							</button>
						) : (
							''
						)} */}
						<div className="tag-list">
							<TagList
								column
								titleColor={colors.dark}
								color={colors.color1}
								width={'50px'}
								weight={400}
								fontSize={'2em'}
								padding={'5px 25px'}
								radius={5}
							/>
						</div>
						<style jsx>{`
							section {
								margin: 0 auto;
								padding-top: 5vh;
							}
							div {
								align-items: center;
								display: flex;
							}
							.back {
								position: absolute;
								right: 15%;
								cursor: pointer;
							}
							.tag-list {
								width: 50px;
								margin-top: -20%;
								margin-left: 5vw;
							}
							@media screen and (min-width: 968px) {
								width: 720px;
								display: flex;
								flex-flow: row nowrap;
								justify-content: space-between;
							}
							@media screen and (min-width: 1024px) {
								width: 968px;
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
