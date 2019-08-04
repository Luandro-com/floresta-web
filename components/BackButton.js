import Router from 'next/router';
import colors from '../lib/colors';

export default function BackButton({ to }) {
	return (
		<button onClick={() => Router.push(to)}>
			Voltar
			<style jsx>{`
				cursor: pointer;
				background: ${colors.dark};
				text-transform: uppercase;
				padding: 5px 15px;
				border-radius: 5px;
				color: ${colors.light};
			`}</style>
		</button>
	);
}
