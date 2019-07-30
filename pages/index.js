import App from '../components/App';
import HomeWelcome from '../components/HomeWelcome';
import Welcome from '../components/Welcome';
import CategoryList from '../components/CategoryList';
import TagList from '../components/TagList';
import NewsList from '../components/NewsList';

export default () => (
	<App>
		<HomeWelcome />
		<div className="pattern">
			<CategoryList />
			<NewsList />
			<TagList />
		</div>
		<style jsx>{`
			.pattern {
				background: gray;
				background-image: url("");
				margin-top: -5vh;
				padding-bottom: 20vh;
			}
		`}</style>
	</App>
);
