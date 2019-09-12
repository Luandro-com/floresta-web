import Link from 'next/link'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import useWindowScrollPosition from '@rehooks/window-scroll-position'
import colors from '../lib/colors'
import AnyImage from './AnyImage'
import HamburgerButton from './HamburgerButton'
import Loading from './Loading'

export const CONTENT = gql`
  query {
    content {
      logo
      youtubeLink
      facebookLink
      instagramLink
      flickrLink
    }
  }
`

const Header = ({ router: { pathname } }) => {
  const [menuState, menuToggle] = React.useState(false)
  let position = {
    y: 0
  }
  if (process.browser && position.y < 100) {
    position = useWindowScrollPosition({ throttle: 100 })
  }
  const scrolled = position.y > 100
  return (
    <Query query={CONTENT}>
      {({ loading, error, data }) => {
        if (error) return <h2>Oops</h2>
        if (loading) return <Loading />
        if (data && data.content) {
          const {
            logo,
            youtubeLink,
            facebookLink,
            instagramLink,
            flickrLink
          } = data.content
          return (
            <header className={scrolled ? 'header-fade' : ''}>
              <div
                className={
                  scrolled
                    ? 'color-header color-header-scrolled'
                    : 'color-header'
                }
              >
                <div className='triangle-left' />
              </div>
              <div className='burger'>
                <HamburgerButton
                  color={colors.light}
                  open={menuState}
                  action={() => menuToggle(!menuState)}
                  size={25}
                />
              </div>
              <div
                className={
                  menuState
                    ? 'links open'
                    : scrolled
                      ? 'links links-scrolled'
                      : 'links'
                }
              >
                <Link prefetch href='/'>
                  <div className={scrolled ? 'logo disappear' : 'logo'}>
                    <AnyImage src={logo} size='25vh' color={'white'} />
                  </div>
                </Link>

                <div className='menu'>
                  <span className={scrolled ? 'home' : 'home disappear'}>
                    <Link prefetch href='/'>
                      <a className={pathname === '/' ? 'is-active' : ''}>
                        Início
                      </a>
                    </Link>
                  </span>
                  <Link prefetch href='/about'>
                    <a className={pathname === '/about' ? 'is-active' : ''}>
                      Quem somos
                    </a>
                  </Link>
                  <Link prefetch href='/villages'>
                    <a className={pathname === '/villages' ? 'is-active' : ''}>
                      Aldeias
                    </a>
                  </Link>
                  <Link prefetch href='/categories'>
                    <a
                      className={pathname === '/categories' ? 'is-active' : ''}
                    >
                      Linhas de ação
                    </a>
                  </Link>
                  <Link prefetch href='/projects'>
                    <a className={pathname === '/projects' ? 'is-active' : ''}>
                      Projetos
                    </a>
                  </Link>
                  <Link prefetch href='/news'>
                    <a className={pathname === '/news' ? 'is-active' : ''}>
                      Notícias
                    </a>
                  </Link>
                  <div className='social'>
                    <a
                      className='icon'
                      target='_blank'
                      href={facebookLink || 'https://facebook.com'}
                    >
                      <img
                        src='/static/facebook_icon.png'
                        style={{ width: 10 }}
                      />
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
                </div>
              </div>
              <style jsx>{`
                header {
                  width: 100%;
                  z-index: 100;
                  top: 0;
                  position: fixed;
                  height: 15vh;
                  padding-top: 5vh;
                  transition: top 0.4s ease;
                  left: 0;
                }
                .header-fade {
                  background: none;
                  border: none;
                  box-shadow: none;
                  /* height: 7vh; */
                  /* height: 11vh; */
                  top: -5vh;
                }
                .color-header {
                  background: ${colors.dark};
                  width: 100%;
                  height: 7vh;
                  position: fixed;
                  right: -110%;
                  transition: right 1.2s ease;
                }
                .triangle-left {
                  width: 3.5vh;
                  height: 0;
                  padding-top: 3.5vh;
                  padding-bottom: 3.5vh;
                  overflow: hidden;
                  position: relative;
                  right: 3.5vh;
                }
                .triangle-left:after {
                  content: '';
                  display: block;
                  width: 0;
                  height: 0;
                  margin-top: -500px;
                  border-top: 500px solid transparent;
                  border-bottom: 500px solid transparent;
                  border-right: 500px solid ${colors.dark};
                }
                img {
                  width: 15px;
                  margin: 0 auto;
                }
                a {
                  text-decoration: none;
                  color: white;
                  text-transform: uppercase;
                  font-size: 1.4em;
                  padding: 4px 15px;
                  border-radius: 7px;
                  margin-right: 15px;
                }
                .logo {
                  position: fixed;
                  cursor: pointer;
                  opacity: 1;
                  transition: height 0.2s ease;
                  transition: opacity 0.6s ease;
                }
                .burger {
                  width: 100%;
                  position: fixed;
                  top: 0;
                  background: ${colors.dark};
                  padding: 12px;
                  z-index: 100;
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                }
                .links {
                  width: 100%;
                  height: 100vh;
                  position: fixed;
                  left: -300vw;
                  transition: left 0.6s;
                  background: ${colors.dark};
                  display: flex;
                  flex-flow: column;
                  align-items: center;
                  justify-content: space-around;
                  z-index: 99;
                }
                .home {
                  opacity: 1;
                  transition: all 0.8s ease;
                }
                .social {
                  padding-top: 3vh;
                  display: flex;
                  flex-flow: row nowrap;
                  align-items: center;
                }
                .is-active,
                a:hover {
                  background: ${colors.color1};
                }
                .open {
                  left: 0;
                }
                a:hover img {
                  filter: brightness(0) invert(1);
                }
                .icon {
                  width: 24px;
                  height: 14px;
                  padding: 10px 5px;
                  border-radius: 100%;
                  background: white;
                  font-size: 0;
                  text-align: center;
                  display: flex;
                  align-items: center;
                }
                @media screen and (max-width: 968px) {
                  .logo {
                    padding-top: 18vh;
                  }
                  .menu {
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    justify-content: space-between;
                    height: 50vh;
                  }
                }
                @media screen and (min-width: 968px) {
                  .disappear {
                    opacity: 0;
                  }
                  header {
                    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.4);
                    background: rgba(0, 0, 0, 0.4);
                    border-radius: 4px;
                    transition: height 0.5s ease;
                  }
                  .links {
                    width: 90%;
                    margin-left: -43%;
                    /* font-size: 30px; */
                    height: 11vh;
                    position: absolute;
                    left: 50%;
                    /* top: 5%; */
                    background: none;
                    justify-content: flex-start;
                    flex-flow: row nowrap;
                    transition: all 0.4s ease;
                  }
                  .color-header-scrolled {
                    right: 0;
                  }
                  .links-scrolled {
                    height: 7vh;
                  }
                  .menu {
                    padding: 25px 0;
                    margin-bottom: 25px;
                    width: 90%;
                    display: flex;
                    flex-flow: row no-wrap;
                    align-items: baseline;
                    justify-content: flex-end;
                    background: none;
                  }
                  .burger {
                    display: none;
                  }
                }
                @media screen and (min-width: 1024px) {
                  .menu {
                    width: 70%;
                  }
                }
                @media screen and (min-width: 1280px) {
                  .links {
                    /* width: 968px; */
                  }
                }
              `}</style>
            </header>
          )
        }
      }}
    </Query>
  )
}

export default withRouter(Header)
