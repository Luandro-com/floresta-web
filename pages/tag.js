import App from '../components/App';
import { withRouter } from 'next/router';
import Link from 'next/link';
import Welcome from '../components/Welcome';

const Page = ({ router: { query: { slug } } }) => {
	return (
		<App>
			<Welcome />
			{slug ? (
				<div>
					<div>{slug}</div>
				</div>
			) : (
				<span>Loading...</span>
			)}
		</App>
	);
};
export default withRouter(Page);
