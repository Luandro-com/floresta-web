import TagItem from './TagItem';
import colors from '../lib/colors';

export default function ProjectItem({ slug, name, media, tags, description }) {
	return (
		<a href={`project?slug=${slug}`}>
			<div className="media" />
			<div className="info">
				<div className="info-container">
					<h4>{name}</h4>
					<div
						className="description color1"
						style={{ color: colors.color1 }}
						dangerouslySetInnerHTML={{ __html: description ? description.substring(0, 500) : '' }}
					/>
					{tags.map((tag) => (
						<TagItem
							key={tag.id}
							{...tag}
							color={colors.light}
							backgroundColor={colors.color1}
							padding="2px 12px"
							radius={5}
						/>
					))}
				</div>
			</div>
			<style jsx>{`
				background: ${colors.light};
				width: 100%;
				border-radius: 35px;
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				p {
					color: ${colors.color1};
				}
				h4 {
					color: ${colors.dark};
					font-size: 1.8em;
					font-weight: 900;
					margin: 0 auto 1vh;
				}
				.media {
					border-radius: 35px 0 0 35px;
					background-image: url("${media}");
					background-size: cover;
					height: 200px;
					width: 60%;
				}
				.info {
					width: 40%;
				}
				.info-container {
					width: 90%;
					margin: 0 auto;
					display: flex;
					flex-flow: column;
					align-items: flex-start;
				}
			`}</style>
		</a>
	);
}
