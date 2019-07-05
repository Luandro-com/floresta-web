export default function NewsItem({ description, link }) {
	return (
		<li>
			<div>
				<a href={link}>{description}</a>
			</div>
		</li>
	);
}
