import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import Carousel from 'nuka-carousel';
import NewsItem from './NewsItem';
import Arrows from './Arrows';

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
	let slidesToShow = 1;
	if (process.browser) {
		console.log(window.innerWidth);
		if (window.innerWidth > 640) slidesToShow = 2;
		if (window.innerWidth > 968) slidesToShow = 3;
	}
	console.log(slidesToShow);
	return (
		<Query query={NEWS_ALL}>
			{({ loading, error, data: { newsAll }, fetchMore }) => {
				if (error) return <ErrorMessage message="Error loading posts." />;
				if (loading) return <div>Loading</div>;
				// const areMorePosts = allPosts.length < _allPostsMeta.count
				return (
					<section>
						<h2>Notícias</h2>
						{slidesToShow ? (
							<Carousel
								cellSpacing={slidesToShow > 1 ? 25 : 0}
								slidesToShow={slidesToShow}
								slidesToScroll={slidesToShow}
								// renderBottomCenterControls={({ currentSlide }) => (
								// 	<div className="slide-count">Slide: {currentSlide}</div>
								// )}
								renderCenterLeftControls={
									slidesToShow > 1 ? (
										({ previousSlide }) => (
											<button className="slide-button" onClick={previousSlide}>
												<Arrows left />
											</button>
										)
									) : null
								}
								renderCenterRightControls={
									slidesToShow > 1 ? (
										({ nextSlide }) => (
											<button className="slide-button right" onClick={nextSlide}>
												<Arrows right />
											</button>
										)
									) : null
								}
							>
								{newsAll.map((news) => <NewsItem {...news} key={news.id} />)}
							</Carousel>
						) : (
							<NewsItem />
						)}
						<div className="list" />
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
								padding: 10vh 5% 0;
								text-align: center;
							}
							h2 {
								padding-bottom: 5vh;
							}
							div {
								display: flex;
								flex-flow: column;
								align-items: center;
								justify-content: center;
							}
							.slide-button {
								cursor: pointer;
								position: relative;
								right: 50px;
								background: none;
								width: 50px;
								// height: 50px;
							}
							.right {
								left: 50px;
							}
							@media screen and (min-width: 480px) {
								flex-flow: row;
								justify-content: space-around;
							}
							@media screen and (min-width: 1024px) {
								flex-flow: row;
								justify-content: space-around;
								width: 860px;
								margin: 0 auto;
							}
							@media screen and (min-width: 1280px) {
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
