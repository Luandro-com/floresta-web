import VillageItem from "./VillageItem"
import ShowMore from "./ShowMore"

const villageHeight = 260

export default ({ villages, text }) => (
  <div>
    <h1>Aldeias</h1>
    <div
      className='description color1'
      dangerouslySetInnerHTML={{
        __html: text || ""
      }}
    />
    {villages &&
      villages.map(village => (
        <VillageItem height={villageHeight} {...village} key={village.id} />
      ))}
    <style jsx>{`
      width: 100%;
      margin: 0 auto;
      @media screen and (min-width: 845px) {
        height: ${villages.length * villageHeight + villages.length * 90}px;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
      }
    `}</style>
  </div>
)
