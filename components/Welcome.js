import Header from './Header';

export default ({ text }) => (
	<section>
		<Header />
		<h2>{text && text}</h2>
		<style jsx>{`
			header {
				background: black;
				padding: 25px 0;
				margin-bottom: 25px;
				width: 100%;
				display: flex;
				flex-flow: row no-wrap;
				align-items: center;
				justify-content: space-around;
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
		`}</style>
	</section>
);
