import Link from 'next/link';
import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import colors from '../lib/colors';
import AnyImage from './AnyImage';

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
									<AnyImage src={logo} size="40vh" />
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
								<img src="/static/facebook_icon.png" style={{ width: 10 }} />
							</a>
							<a
								className="icon"
								target="_blank"
								href={youtubeLink ? youtubeLink : 'https://youtube.com'}
							>
								<img src="/static/youtube_icon.png" />
							</a>
						</div>
					</div>
					<style jsx>{`
						img {
							width: 15px;
							margin: 0 auto;
						}
						a {
							text-decoration: none;
							color: white;
							text-transform: uppercase;
							font-size: 22px;
							padding: 4px 15px;
							border-radius: 7px;
							margin-right: 15px;
						}
						.burger {
							color: white;
							text-align: left;
						}
						.links {
							display: none;
						}
						.is-active,
						a:hover {
							background: ${colors.color1};
						}
						a:hover img {
							filter: brightness(0) invert(1);
						}
						.icon {
							width: 24px;
							height: 14px;
							padding: 10px 5px;
							border-radius: 100%;
							background: white;
							font-size: 0;
							text-align: center;
							display: flex;
							align-items: center;
						}
						@media screen and (min-width: 968px) {
							.links {
								font-size: 30px;
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
