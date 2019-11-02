import colors from '../lib/colors'

export default ({ top, animate, left, right, size }) => (
  <div className='arrow'>
    <span className={animate ? 'animate' : ''} />
    <span className={animate ? 'animate' : ''} />
    <span className={animate ? 'animate' : ''} />
    <style jsx>{`
      .arrow {
        position: absolute;
        top: ${top || (animate ? '160%' : '200%')};
        left: ${typeof left === 'string' ? left : '50%'};
        transform: translate(-50%, -50%);
      }
      .arrow span {
        margin-top: ${animate ? '-40px' : '-100%'};
        position: relative;
        display: block;
        width: ${size || '35px'};
        height: ${size || '35px'};
        border-bottom: 2px solid ${colors.light};
        border-right: 2px solid ${colors.light};
        transform: rotate(${left ? '135' : right ? '315' : '90'}deg);
      }
      .arrow span:nth-of-type(1) {
        left: ${animate ? 0 : 5}px;
      }
      .arrow span:nth-of-type(2) {
        left: ${animate ? 0 : 10}px;
      }
      .arrow span:nth-of-type(3) {
        left: ${animate ? 0 : 15}px;
      }
      .animate {
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
)
