import colors from '../lib/colors';

export default function TagItem({ slug, name, color, backgroundColor, padding, radius }) {
	return (
		<a href={`tag?slug=${slug}`}>
			<div>{name}</div>
			<style jsx>{`
				a {
				}
				div {
					cursor: pointer;
					border: 1px solid ${backgroundColor || colors.light};
					background: ${backgroundColor || colors.light};
					border-radius: ${radius || '35'}px;
					padding: ${padding || '10px 18px'};
					text-transform: uppercase;
					font-weight: 100;
					color: ${color || colors.light};
				}
				div:hover {
					background: ${colors.light};
					color: ${colors.dark2};
				}
			`}</style>
		</a>
	);
}
