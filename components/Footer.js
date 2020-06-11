import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from './Loading'
import colors from '../lib/colors'

export const CONTENT = gql`
  query {
    content {
      email
      youtubeLink
      facebookLink
      instagramLink
      flickrLink
    }
  }
`

export default () => {
  const contentQuery = useQuery(CONTENT)
  const loadingContent = contentQuery.loading
  const errorContent = contentQuery.error
  if (contentQuery.data && contentQuery.data.content) {
    const {
      email,
      youtubeLink,
      facebookLink,
      instagramLink,
      flickrLink,
      fundoLink
    } = contentQuery.data.content
    return (
      <div>
        <div className='container'>
          <div className='section'>
            <a href='_mailto' href={email}>
              <h3>{email || 'email@email.org'}</h3>
            </a>
            <div className='social'>
              <a
                className='icon'
                target='_blank'
                href={facebookLink || 'https://facebook.com'}
              >
                <img src='/static/facebook_icon.png' style={{ width: 17 }} />
              </a>
              <a
                className='icon'
                target='_blank'
                href={youtubeLink || 'https://youtube.com'}
              >
                <img src='/static/youtube_icon.png' />
              </a>
              <a
                className='icon'
                target='_blank'
                href={flickrLink || 'https://flickr.com'}
              >
                <img src='/static/flickr_icon.png' />
              </a>
              <a
                className='icon'
                target='_blank'
                href={instagramLink || 'https://instagram.com'}
              >
                <img src='/static/instagram_icon.png' />
              </a>
            </div>
            <a
             target='_blank'
             href={fundoLink || 'http://www.fundoamazonia.gov.br/'}
            >
            <img src='/static/fundo_amazonia.jpg' style={{ width: 200 }} />
          </a>
          Rua Lateral nº 38 <br></br>Bairro: JK CEP:68.385-000  <br></br> Tucumã/Pará
          </div>
          <div className='section' />
        </div>
        <style jsx>{`
          background: ${colors.color5};
          .container {
            width: 90%;
            max-width: 968px;
            margin: 0 auto;
            display: flex;
            flex-flow: row nowrap;
            padding: 10vh 0;
            justify-content: space-around;
          }
          .section {
            width: 300px;
            display: flex;
            flex-flow: column;
          }
          .social {
            padding-bottom: 4vh;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
          }
          .social img {
            width: 25px;
            margin: 0 auto;
            background: white;
          }
          a:hover img {
            /* filter: brightness(0) invert(1); */
            background: white;
            /* background: ${colors.color1}; */
          }
          .social a:hover {
            background: ${colors.color1};
          }
          .icon {
            width: 35px;
            height: 24px;
            padding: 15px 10px;
            border-radius: 100%;
            background: white;
            font-size: 0;
            text-align: center;
            display: flex;
            align-items: center;
          }
          h3 {
            font-size: 2em;
          }
        `}</style>
      </div>
    )
  } else {
    return <Loading />
  }
}
