import App from '../components/App';
import HomeWelcome from '../components/HomeWelcome';
import CategoryList from '../components/CategoryList';
import TagList from '../components/TagList';
import NewsList from '../components/NewsList';
import colors from '../lib/colors';

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
				background: ${colors.dark2};
				background-image: url("/static/grafismo.png");
				background-repeat: round;
				margin-top: -5vh;
			}
		`}</style>
	</App>
);
