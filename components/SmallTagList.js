import { useState } from 'react'

import Dialog from './Dialog'
import TagItem from './TagItem'
import colors from '../lib/colors'

export default ({ tags }) => {
  const [modalOpen, setModal] = useState(false)
  return (
    <div>
      <div className='tag-list'>
        <TagList tags={tags} limit={3} />
        {tags.length > 3 && (
          <div className='tag-more' onClick={() => setModal(true)}>
            Mostrar todas
          </div>
        )}
      </div>
      <Dialog open={modalOpen} close={() => setModal(false)}>
        <TagList tags={tags} />
      </Dialog>
      <style jsx>{`
        .tag-list {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
        }
        .tag-more {
          width: 100px;
          border: 1px solid ${colors.color1};
          border-radius: 5px;
          color: ${colors.color1};
          text-align: center;
          padding: 3px 10px;
          margin: 0 auto;
          cursor: pointer;
        }
        .tag-more:hover {
          background: ${colors.color1};
          color: ${colors.light};
        }
      `}</style>
    </div>
  )
}

const TagList = ({ tags = [], limit = 0 }) => (
  <div>
    {tags
      .filter((t, key) => (limit ? key < limit : key))
      .map(tag => (
        <TagItem
          key={tag.id}
          {...tag}
          color={colors.light}
          backgroundColor={colors.color1}
          padding='3px 10px'
          radius={5}
          margin={'10px 2px'}
          fontSize={'1em'}
        />
      ))}
    <style jsx>{`
      display: flex;
      flex-flow: row wrap;
    `}</style>
  </div>
)
