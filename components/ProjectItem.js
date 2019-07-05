export default function ProjectItem({ slug, name }) {
	return (
		<li>
			<div>
				<a href={`project?slug=${slug}`}>{name}</a>
			</div>
		</li>
	);
}
