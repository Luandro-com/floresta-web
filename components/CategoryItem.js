import ReactSVG from 'react-svg';
const boxHeight = 100;

export default function CategoryItem({ slug, name, icon, media }) {
	return (
		<div>
			<div className="container">
				<a href={`category?slug=${slug}`}>
					<div className="images">
						<div className="icon">
							<ReactSVG src={icon} />
						</div>
						<div className="image" style={{ backgroundImage: `url(${media})` }} />
					</div>
					<div className="info">
						<h3>{name}</h3>
					</div>
				</a>
			</div>
			<style jsx>{`
				a {
					text-decoration: none;
				}
				h3 {
					font-size: 14px;
				}
				.container {
					width: 100%;
				}
				.images {
					width: 100%;
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
					align-items: center;
				}
				.icon {
					position: relative;
					left: ${boxHeight / 2}px;
					width: 160px;
					height: ${boxHeight - 20}px;
					background: blue;
					border-radius: ${boxHeight}px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.image {
					height: ${boxHeight}px;
					width: 100%;
					background: red;
					background-size: cover;
				}
				@media screen and (min-width: 640px) {
					.container {
						width: 50%;
					}
				}
			`}</style>
		</div>
	);
}
