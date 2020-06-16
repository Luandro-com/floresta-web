import Arrows from "./Arrows"

export default () => {
  return (
    <nav>
      <div className='arrow'>
        <Arrows left />
      </div>
      <div className='numbers'>
        <span className='number'>1</span>
        <span className='number'>2</span>
        <span className='number'>3</span>
      </div>
      <div className='arrow right'>
        <Arrows right />
      </div>
      <style jsx>{`
        top: 30px;
        margin: 0 auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        position: relative;
        .arrow {
          top: 8vh;
        }
        .numbers {
          display: flex;
          align-items: center;
          /* justify-content: center; */
          width: 10vw;
        }
        .number {
          font-size: 2em;
        }
      `}</style>
    </nav>
  )
}
