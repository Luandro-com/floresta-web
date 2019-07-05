export default function TagItem({ slug, name }) {
	return (
		<li>
			<div>
				<a href={`tag?slug=${slug}`}>{name}</a>
			</div>
		</li>
	);
}
