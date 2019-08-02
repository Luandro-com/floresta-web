import Header from '../components/Header';

import colors from '../lib/colors';

export default ({ children }) => (
	<main>
		<Header />
		{children}
		<style jsx global>{`
			* {
				font-family: 'Titillium Web', sans-serif;
			}
			body,
			html {
				padding: 0;
				margin: 0;
				background: ${colors.dark};
				color: ${colors.light};
			}
			/* Ugly hack */
			body {
				margin-top: -6.66vh;
			}
			h1 {
				font-family: 'Varela Round', sans-serif;
			}
			h2,
			h3 {
				font-family: 'Amatic SC', cursive;
				font-size: 1.8em;
				color: ${colors.light};
				font-weight: 100;
			}
			a {
				color: white;
				font-family: 'Amatic SC', cursive;
				text-decoration: none;
			}
			p {
				font-size: 14px;
				line-height: 24px;
			}
			article {
				margin: 0 auto;
				max-width: 650px;
			}
			button {
				align-items: center;
				background-color: #22bad9;
				border: 0;
				color: white;
				display: flex;
				padding: 5px 7px;
			}
			button:active {
				background-color: #1b9db7;
				transition: background-color 0.3s;
			}
			button:focus {
				outline: none;
			}
		`}</style>
	</main>
);
