import Header from './Header';

export default ({ text, background }) => (
	<section style={{ backgroundColor: 'blue', backgroundImage: `url(${background})`, height: '90vh' }}>
		<Header />
		<div className="info">
			<h2>{text && text}</h2>
			<a href="#category-list">scroll</a>
		</div>
		<style jsx>{`
			header {
				padding: 25px 0;
				margin-bottom: 25px;
				width: 100%;
				display: flex;
				flex-flow: row no-wrap;
				align-items: center;
				justify-content: space-around;
			}
			.info {
				margin: 0 auto;
				position: relative;
				bottom: -40%;
				width: 80%;
				text-align: center;
				text-transform: uppercase;
				font-size: 0.7em;
				font-weight: 100;
			}
			img {
				width: 250px;
			}
			a {
				font-size: 14px;
				margin-right: 15px;
				text-decoration: none;
			}
			.is-active {
				text-decoration: underline;
			}
			@media screen and (min-width: 480px) {
				.info {
					width: 60%;
					bottom: -45%;
				}
			}
			@media screen and (min-width: 680px) {
				.info {
					width: 50%;
					bottom: -50%;
				}
			}
			@media screen and (min-width: 720px) {
				.info {
					width: 40%;
					bottom: -55%;
				}
			}
			@media screen and (min-width: 1024px) {
				.info {
					width: 30%;
				}
			}
		`}</style>
	</section>
);
