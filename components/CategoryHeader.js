import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import CategoryHeaderItem from './CategoryHeaderItem';
import colors from '../lib/colors';

export const PROJECT_CATEGORIES = gql`
	query {
		projectCategories {
			id
			slug
			name
			description
			icon
		}
	}
`;
export default function CategoryList({ slug }) {
	return (
		<Query query={PROJECT_CATEGORIES}>
			{({ loading, error, data: { projectCategories }, fetchMore }) => {
				if (error) return <ErrorMessage message="Error loading posts." />;
				if (loading) return <div>Loading</div>;
				// const areMorePosts = allPosts.length < _allPostsMeta.count
				return (
					<section>
						<div className="container">
							<div className="title">
								<img src="/static/grafismo_p.png" />
								<h2>
									{projectCategories.filter((c) => c.slug === slug)[0] ? (
										projectCategories.filter((c) => c.slug === slug)[0].name
									) : (
										'Inválido'
									)}
								</h2>
							</div>
							<div className="divider" />
							<div className="list">
								{projectCategories.map((category) => (
									<CategoryHeaderItem
										{...category}
										key={category.id}
										current={
											category.slug === projectCategories.filter((c) => c.slug === slug)[0].slug
										}
									/>
								))}
							</div>
						</div>
						<div
							className="description"
							dangerouslySetInnerHTML={{
								__html: projectCategories.filter((c) => c.slug === slug)[0].description
									? projectCategories.filter((c) => c.slug === slug)[0].description
									: ''
							}}
						/>
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
								padding: 5vh 0 0;
								background: ${colors.light2};
							}
							h2 {
								font-size: 2em;
								text-align: center;
							}
							img {
								display: none;
								position: absolute;
								left: -3.5%;
							}
							div {
								align-items: center;
								display: flex;
							}
							.divider {
								display: none;
								height: 100px;
								background: ${colors.dark};
								width: 2px;
								margin: 0 5vw;
							}
							.container {
								width: 90%;
								margin: 0 auto;
								flex-flow: column;
								align-items: center;
								justify-content: center;
							}
							.description {
								color: ${colors.dark};
								margin: 5vh auto 0;
								width: 90%;
							}
							@media screen and (min-width: 968px) {
								h2 {
									font-size: 2.5em;
								}
								section {
								}
								img {
									display: block;
									width: 155px;
								}
								.container {
									flex-flow: row;
									width: 720px;
								}
								.title {
									width: 20%;
								}
								.list {
									width: 80%;
								}
								.divider {
									display: block;
								}
								.description {
									width: 720px;
								}
							}
							@media screen and (min-width: 1024px) {
								img {
									width: 175px;
								}
								.container,
								.description {
									width: 800px;
								}
							}
							@media screen and (min-width: 1280px) {
								.container,
								.description {
									width: 968px;
								}
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
