import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import NewsItem from './NewsItem';

export const NEWS_ALL = gql`
	query {
		newsAll {
			id
			description
			link
			title
			media
		}
	}
`;
export default function NewsList() {
	return (
		<Query query={NEWS_ALL}>
			{({ loading, error, data: { newsAll }, fetchMore }) => {
				if (error) return <ErrorMessage message="Error loading posts." />;
				if (loading) return <div>Loading</div>;
				// const areMorePosts = allPosts.length < _allPostsMeta.count
				return (
					<section>
						<h1>Notícias</h1>
						<div className="list">{newsAll.map((news) => <NewsItem {...news} key={news.id} />)}</div>
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
								padding-top: 10vh;
								text-align: center;
							}
							div {
								display: flex;
								flex-flow: column;
								align-items: center;
								justify-content: center;
							}
							@media screen and (min-width: 480px) {
								flex-flow: row;
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
