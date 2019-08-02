import ReactSVG from 'react-svg';
import colors from '../lib/colors';
import AnyImage from './AnyImage';
const boxHeight = 120;
const boxWidth = 250;
const boxWidthB = 350;
const boxHeightB = 135;

export default function CategoryItem({ slug, name, icon, media }) {
	return (
		<div className="container">
			<a href={`category?slug=${slug}`}>
				<div className="images" style={{ backgroundImage: `url(${media})` }}>
					<div className="icon">
						<AnyImage src={icon} width={boxHeight - 20} />
					</div>
				</div>
				<div className="info">
					<h3>{name}</h3>
				</div>
			</a>
			<style jsx>{`
				.container {
					margin: 25px auto;
					cursor: pointer;
				}
				a {
					text-decoration: none;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 15px;
					width: ${boxWidth - 30}px;
					height: ${boxHeight}px;
					background: ${colors.light};
				}
				h3 {
					font-size: 14px;
					color: ${colors.color1};
					text-transform: uppercase;
				}
				.images {
					position: relative;
					left: -15px;
					top: 1px;
					width: 60%;
					height: ${boxHeight}px;
					border-radius: 30px 0 0 30px;
					background-size: cover;
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
					align-items: center;
				}
				.icon {
					position: relative;
					left: -${boxWidth / 8}px;
					width: ${boxHeight - 20}px;
					height: ${boxHeight - 20}px;
					background: ${colors.dark};
					border-radius: ${boxHeight}px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.info {
					position: relative;
					left: -8px;
					width: 40%;
					height: ${boxHeight}px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				@media screen and (min-width: 968px) {
					.container {
						margin: 0 auto;
					}
					a {
						width: ${boxWidthB}px;
						height: ${boxHeightB}px;
					}
					.images {
						height: ${boxHeightB}px;
					}
					.icon {
						left: -${boxWidthB / 8}px;
					}
				}
			`}</style>
		</div>
	);
}
