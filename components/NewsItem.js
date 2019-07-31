import colors from '../lib/colors';

export default function NewsItem({ title, media, description, link }) {
	return (
		<a href={link}>
			<div className="container">
				<div className="media" />
				<div className="title">
					<h3>{title}</h3>
				</div>
				<div className="description" dangerouslySetInnerHTML={{ __html: description }} />
			</div>
			<style jsx>{`
				.container {
					width: 80%;
					display: flex;
					flex-flow: column;
				}
				.media {
					height: 200px;
					background-image: url("${media}");
					background-size: cover;
				}
				.title {
					width: 100%;
					background: ${colors.dark};
				}
			`}</style>
		</a>
	);
}
