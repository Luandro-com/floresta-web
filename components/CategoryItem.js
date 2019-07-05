export default function CategoryItem({ slug, name }) {
	return (
		<li>
			<div>
				<a href={`category?slug=${slug}`}>{name}</a>
			</div>
		</li>
	);
}
