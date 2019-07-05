import Link from 'next/link';
import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
export const CONTENT = gql`
	query {
		content {
			logo
		}
	}
`;

const Header = ({ router: { pathname } }) => (
	<Query query={CONTENT}>
		{({ loading, error, data: { content } }) => {
			if (error) return <h2>Oops</h2>;
			if (loading) return <div>Loading</div>;
			return (
				<header>
					<Link prefetch href="/">
						<a className={pathname === '/' ? 'is-active' : ''}>
							<img src={content.logo} />
						</a>
					</Link>
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
				</header>
			);
		}}
	</Query>
);

export default withRouter(Header);
