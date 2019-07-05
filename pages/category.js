import App from '../components/App';
import Router from 'next/router';
import Link from 'next/link';
import Welcome from '../components/Welcome';
import CategoryHeader from '../components/CategoryHeader';
import CategoryLayout from '../components/CategoryLayout';

export default () => {
	let slug = null;
	if (Router.router) {
		slug = Router.router.query.slug;
	}
	return (
		<App>
			<Welcome />
			{slug ? (
				<div>
					<CategoryHeader slug={slug} />
					<CategoryLayout slug={slug} />
				</div>
			) : (
				<span>Loading...</span>
			)}
		</App>
	);
};
