import App from '../components/App';
import HomeWelcome from '../components/HomeWelcome';
import Welcome from '../components/Welcome';
import CategoryList from '../components/CategoryList';
import TagList from '../components/TagList';
import NewsList from '../components/NewsList';

export default () => (
	<App>
		<HomeWelcome />
		<CategoryList />
		<TagList />
		<NewsList />
	</App>
);
