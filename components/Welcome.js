import Header from './Header';
import colors from '../lib/colors';
import { animateScroll as scroll } from 'react-scroll';
import Arrows from './Arrows';

export default ({ text, background }) => {
	let viewSize = 800;
	if (process.browser) {
		viewSize = window.innerHeight - 50;
	}
	return (
		<section
			style={{
				backgroundColor: colors.dark,
				backgroundImage: `url(/static/header_home.png)`,
				height: '100vh',
				backgroundPosition: 'bottom',
				backgroundSize: 'cover'
			}}
		>
			<Header />
			<div className="info">
				<h2>{text && text}</h2>
				<a onClick={() => scroll.scrollTo(viewSize)}>
					<Arrows />
				</a>
			</div>
			<style jsx>{`
				.info {
					margin: 0 auto;
					position: relative;
					bottom: -50%;
					width: 80%;
					text-align: center;
					text-transform: uppercase;
					font-size: 1em;
					cursor: pointer;
				}
				@media screen and (min-width: 480px) {
					.info {
						width: 50%;
						bottom: -25%;
						font-size: 30px;
					}
				}
			`}</style>
		</section>
	);
};
