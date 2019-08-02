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
			<div className="info">
				<h2>{text && text}</h2>
				<a onClick={() => scroll.scrollTo(viewSize)}>
					<Arrows animate />
				</a>
			</div>
			<style jsx>{`
			a {
				margin-top: -50vh;
			}
				.info {
					margin: 0 auto;
					position: relative;
					bottom: -65vh;
					width: 80%;
					text-align: center;
					text-transform: uppercase;
					font-size: 1em;
					cursor: pointer;
				}
				@media screen and (min-width: 480px) {
					.info {
						width: 50%;
						font-size: 18px;
					}
				@media screen and (min-width: 968px) {
					.info {
						font-size: 24px;
					}
				}
				@media screen and (min-width: 1024px) {
					.info {
						font-size: 30px;
					}
				}
			`}</style>
		</section>
	);
};
