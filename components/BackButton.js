import Router from 'next/router'
import Arrows from './Arrows'
import colors from '../lib/colors'

export default function BackButton ({ to, top, left }) {
  let hasGoBack = false
  if (process.browser && document && document.referrer !== '') {
    hasGoBack = true
  }
  return (
    <button onClick={() => (to ? Router.push(to) : Router.back())}>
      <Arrows size='10px' left top={top || '64%'} left={left || '17px'} />
      Voltar
      <style jsx>{`
        cursor: pointer;
        background: ${colors.dark};
        text-transform: uppercase;
        padding: 12px 25px 12px 50px;
        border-radius: 10px;
        color: ${colors.light};
        display: ${hasGoBack ? 'flex' : 'none'};
        flex-flow: row nowrap;
        align-items: center;
      `}</style>
    </button>
  )
}
