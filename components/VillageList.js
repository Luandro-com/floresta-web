import VillageItem from "./VillageItem"

const villageHeight = 150

export default ({ villages, text }) => {
  return (
    <div>
      <div
        className='description color1'
        dangerouslySetInnerHTML={{
          __html: text || ""
        }}
      />
      <iframe
        src='https://www.google.com/maps/d/embed?mid=1W28Oyr7k4muzJp270p83OX_rIfc'
        width='640'
        height='480'
      />
      <div className='list'>
        {villages &&
          villages.map(village => (
            <VillageItem height={villageHeight} {...village} key={village.id} />
          ))}
      </div>
      <style jsx>{`
        width: 100%;
        margin: 0 auto;
        .description {
          paddin: 5vh 0;
        }
        .list {
          padding-top: 5vh;
          display: flex;
          flex-flow: column;
          justify-content: space-around;
          height: ${villages.length * villageHeight + villages.length * 35}px;
        }
        @media screen and (min-width: 845px) {
          display: flex;
          flex-flow: column;
          justify-content: space-around;
        }
      `}</style>
    </div>
  )
}
