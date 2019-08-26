import App from '../components/App'
import Router from 'next/router'
import Link from 'next/link'

import Welcome from '../components/Welcome'
import CategoryHeader from '../components/CategoryHeader'
import PageLayout from '../components/PageLayout'
import colors from '../lib/colors'

export default () => {
  return (
    <App>
      <Welcome background={'/static/default.png'} height='80vh' />
      <div className='pattern'>
        <div>
          <div className='header'>
            <CategoryHeader color={colors.light} />
          </div>
          <PageLayout main='projects' tagTitleColor={colors.light} />
        </div>
      </div>
      <style jsx>{`
        .pattern {
          background: ${colors.color4};
          background-image: url('/static/pattern_3.png');
          background-repeat: round;
          padding-bottom: 100px;
        }
        .header {
          background: ${colors.color4};
          padding: 30px 0;
        }
      `}</style>
    </App>
  )
}
