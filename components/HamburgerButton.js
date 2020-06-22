export default ({ action, open, color, size }) => (
	<div className="container" onClick={action}>
		<button
			className={open ? 'hamburger hamburger--spring is-active' : 'hamburger hamburger--spring'}
			type="button"
		>
			<span className="hamburger-box">
				<span className="hamburger-inner" />
			</span>
		</button>
		<style jsx>{`
			.container {
				position: relative;
				top: ${(size || 40) / 4}px;
			}
			.hamburger {
				padding: 4px 4px;
				display: inline-block;
				cursor: pointer;
				transition-property: opacity, filter;
				transition-duration: 0.15s;
				transition-timing-function: linear;
				font: inherit;
				color: inherit;
				text-transform: none;
				background-color: transparent;
				border: 0;
				margin: 0;
				overflow: visible;
			}
			.hamburger:hover {
				opacity: 0.7;
			}
			.hamburger.is-active:hover {
				opacity: 0.7;
			}
			.hamburger.is-active .hamburger-inner,
			.hamburger.is-active .hamburger-inner::before,
			.hamburger.is-active .hamburger-inner::after {
				background-color: ${color || '#000'};
			}

			.hamburger-box {
				width: ${size || 40}px;
				height: 24px;
				display: inline-block;
				position: relative;
			}

			.hamburger-inner {
				display: block;
				top: 50%;
				margin-top: -2px;
			}
			.hamburger-inner,
			.hamburger-inner::before,
			.hamburger-inner::after {
				width: ${size || 40}px;
				height: 2px;
				background-color: ${color || '#000'};
				border-radius: 4px;
				position: absolute;
				transition-property: transform;
				transition-duration: 0.15s;
				transition-timing-function: ease;
			}
			.hamburger-inner::before,
			.hamburger-inner::after {
				content: "";
				display: block;
			}
			.hamburger-inner::before {
				top: -${(size || 40) / 4}px;
			}
			.hamburger-inner::after {
				bottom: -10px;
			}
			.hamburger--spring .hamburger-inner {
				top: 2px;
				transition: background-color 0s 0.13s linear;
			}
			.hamburger--spring .hamburger-inner::before {
				top: ${(size || 40) / 4}px;
				transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
					transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
			}
			.hamburger--spring .hamburger-inner::after {
				top: ${(size || 40) / 2}px;
				transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
					transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
			}

			.hamburger--spring.is-active .hamburger-inner {
				transition-delay: 0.22s;
				background-color: transparent !important;
			}
			.hamburger--spring.is-active .hamburger-inner::before {
				top: 0;
				transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
					transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
				transform: translate3d(0, 10px, 0) rotate(45deg);
			}
			.hamburger--spring.is-active .hamburger-inner::after {
				top: 0;
				transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
					transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
				transform: translate3d(0, 10px, 0) rotate(-45deg);
			}
		`}</style>
	</div>
);
