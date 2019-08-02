import AnyImage from './AnyImage';
import colors from '../lib/colors';

export default function CategoryHeaderItem({ slug, name, icon, current }) {
	return (
		<a href={`category?slug=${slug}`}>
			<div className="icon">
				<AnyImage src={icon} marginTop={14} />
			</div>
			<h3>{name}</h3>
			<style jsx>{`
				position: relative;
				top: 1vh;
				color: ${colors.dark};
				padding: 0 5px;
				display: flex;
				flex-flow: column;
				align-items: center;
				h3 {
					font-size: 1em;
				}
				.icon {
					background: ${current ? colors.dark : 'none'};
					border: 1.4px solid ${colors.dark};
					height: 70px;
					width: 70px;
					border-radius: 50%;
					display: flex;
					flex-flow: column;
					align-items: center;
				}
			`}</style>
		</a>
	);
}
