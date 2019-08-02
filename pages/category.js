import App from '../components/App';
import Router from 'next/router';
import Link from 'next/link';
import Welcome from '../components/Welcome';
import CategoryHeader from '../components/CategoryHeader';
import CategoryLayout from '../components/CategoryLayout';
import colors from '../lib/colors';

export default () => {
	let slug = null;
	if (Router.router) {
		slug = Router.router.query.slug;
	}
	return (
		<App>
			<Welcome background={'/static/header_categories.png'} height="80vh" />
			<div className="pattern">
				{slug ? (
					<div>
						<CategoryHeader slug={slug} />
						<CategoryLayout slug={slug} />
					</div>
				) : (
					<span>Loading...</span>
				)}
			</div>
			<style jsx>{`
				.pattern {
					background: ${colors.light2};
					background-image: url("/static/grafismo.png");
					background-repeat: round;
					margin-top: -5vh;
					padding-bottom: 20vh;
				}
			`}</style>
		</App>
	);
};
