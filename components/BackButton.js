import Router from 'next/router';
import colors from '../lib/colors';

export default function BackButton() {
	return (
		<button>
			Voltar
			<style jsx>{`
				background: ${colors.dark};
				text-transform: uppercase;
				padding: 5px 15px;
				border-radius: 5px;
				color: ${colors.light};
			`}</style>
		</button>
	);
}
