import Link from 'next/link';
import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
export const CONTENT = gql`
	query {
		content {
			logo
			youtubeLink
			facebookLink
		}
	}
`;

const Header = ({ router: { pathname } }) => (
	<Query query={CONTENT}>
		{({ loading, error, data: { content: { logo, youtubeLink, facebookLink } } }) => {
			if (error) return <h2>Oops</h2>;
			if (loading) return <div>Loading</div>;
			return (
				<header>
					<div className="burger">X</div>
					<div className="links">
						<div className="logo">
							<Link prefetch href="/">
								<a className={pathname === '/' ? 'is-active' : ''}>
									<img src={logo} />
								</a>
							</Link>
						</div>
						<div className="menu">
							<Link prefetch href="/about">
								<a className={pathname === '/about' ? 'is-active' : ''}>Sobre</a>
							</Link>
							<Link prefetch href="/about">
								<a className={pathname === '/about' ? 'is-active' : ''}>Aldeias</a>
							</Link>
							<Link prefetch href="/about">
								<a className={pathname === '/about' ? 'is-active' : ''}>Linhas de ação</a>
							</Link>
							<Link prefetch href="/about">
								<a className={pathname === '/about' ? 'is-active' : ''}>Projetos</a>
							</Link>
							<Link prefetch href="/about">
								<a className={pathname === '/about' ? 'is-active' : ''}>Notícias</a>
							</Link>
							<a
								className="icon"
								target="_blank"
								href={facebookLink ? facebookLink : 'https://facebook.com'}
							>
								Facebook
							</a>
							<a
								className="icon"
								target="_blank"
								href={youtubeLink ? youtubeLink : 'https://youtube.com'}
							>
								Youtube
							</a>
						</div>
					</div>
					<style jsx>{`
						img {
							width: 150px;
						}
						a {
							text-decoration: none;
							color: white;
							text-transform: uppercase;
							font-size: 0.9em;
							margin-right: 20px;
						}
						.burger {
							color: white;
							text-align: left;
						}
						.links {
							display: none;
						}
						.is-active {
							text-decoration: underline;
						}
						.icon {
							width: 40px;
							height: 40px;
							border-radius: 100%;
							background: blanchedalmond;
							font-size: 0;
						}
						@media screen and (min-width: 968px) {
							.links {
								padding-top: 25px;
								width: 85%;
								margin: 0 auto;
								display: flex;
								flex-flow: row nowrap;
								align-items: center;
								justify-content: space-between;
							}
							.menu {
								padding: 25px 0;
								margin-bottom: 25px;
								width: 90%;
								display: flex;
								flex-flow: row no-wrap;
								align-items: center;
								justify-content: flex-end;
							}
							.menu * {
								// padding: 0 15px;
							}
							.burger {
								display: none;
							}
						}
						@media screen and (min-width: 1024px) {
							.menu {
								width: 70%;
							}
						}
					`}</style>
				</header>
			);
		}}
	</Query>
);

export default withRouter(Header);
