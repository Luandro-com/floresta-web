import Link from 'next/link';
import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Welcome from './Welcome';
export const CONTENT = gql`
	query {
		content {
			banner
			title
			subTitle
		}
	}
`;

const HomeWelcome = ({ router: { pathname } }) => (
	<Query query={CONTENT}>
		{({ loading, error, data: { content } }) => {
			if (error) return <h2>Oops</h2>;
			if (loading) return <div>Loading</div>;
			return <Welcome text={content.subTitle} />;
		}}
	</Query>
);

export default withRouter(HomeWelcome);
