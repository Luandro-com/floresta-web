import colors from '../lib/colors';

export default () => (
	<div className="arrow">
		<span />
		<span />
		<span />
		<style jsx>{`
			.arrow {
				position: absolute;
				top: 150%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
			.arrow span {
				margin-top: -15px;
				display: block;
				width: 35px;
				height: 35px;
				border-bottom: 3px solid ${colors.light};
				border-right: 3px solid ${colors.light};
				transform: rotate(45deg);
				animation: animate 2s infinite;
			}
			.arrow span:nth-child(2) {
				animation-delay: -0.2s;
			}
			.arrow span:nth-child(3) {
				animation-delay: -0.4s;
			}
			@keyframes animate {
				0% {
					opacity: 0;
					transform: rotate(45deg) translate(-20px, -20px);
				}
				50% {
					opacity: 1;
				}
				100% {
					opacity: 0;
					transform: rotate(45deg) translate(20px, 20px);
				}
			}
		`}</style>
	</div>
);
