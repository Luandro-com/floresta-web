import Link from "next/link"
import { withRouter } from "next/router"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import colors from "../lib/colors"
import AnyImage from "./AnyImage"
import HamburgerButton from "./HamburgerButton"

export const CONTENT = gql`
  query {
    content {
      logo
      youtubeLink
      facebookLink
    }
  }
`

const Header = ({ router: { pathname } }) => {
  const [menuState, menuToggle] = React.useState(false)
  return (
    <Query query={CONTENT}>
      {({ loading, error, data }) => {
        if (error) return <h2>Oops</h2>
        if (loading) return <div>Loading</div>
        if (data && data.content) {
          const { logo, youtubeLink, facebookLink } = data.content
          return (
            <header>
              <div className='burger'>
                <HamburgerButton
                  color={colors.light}
                  open={menuState}
                  action={() => menuToggle(!menuState)}
                  size={25}
                />
              </div>
              <div className={menuState ? "links open" : "links"}>
                <Link prefetch href='/'>
                  <div className='logo'>
                    <AnyImage src={logo} size='40vh' />
                  </div>
                </Link>

                <div className='menu'>
                  <Link prefetch href='/about'>
                    <a className={pathname === "/about" ? "is-active" : ""}>
                      Sobre
                    </a>
                  </Link>
                  <Link prefetch href='/villages'>
                    <a className={pathname === "/villages" ? "is-active" : ""}>
                      Aldeias
                    </a>
                  </Link>
                  <Link prefetch href='/categories'>
                    <a
                      className={pathname === "/categories" ? "is-active" : ""}
                    >
                      Linhas de ação
                    </a>
                  </Link>
                  <Link prefetch href='/projects'>
                    <a className={pathname === "/projects" ? "is-active" : ""}>
                      Projetos
                    </a>
                  </Link>
                  <Link prefetch href='/news'>
                    <a className={pathname === "/news" ? "is-active" : ""}>
                      Notícias
                    </a>
                  </Link>
                  <div className='social'>
                    <a
                      className='icon'
                      target='_blank'
                      href={
                        facebookLink ? facebookLink : "https://facebook.com"
                      }
                    >
                      <img
                        src='/static/facebook_icon.png'
                        style={{ width: 10 }}
                      />
                    </a>
                    <a
                      className='icon'
                      target='_blank'
                      href={youtubeLink ? youtubeLink : "https://youtube.com"}
                    >
                      <img src='/static/youtube_icon.png' />
                    </a>
                  </div>
                </div>
              </div>
              <style jsx>{`
                img {
                  width: 15px;
                  margin: 0 auto;
                }
                a {
                  text-decoration: none;
                  color: white;
                  text-transform: uppercase;
                  font-size: 22px;
                  padding: 4px 15px;
                  border-radius: 7px;
                  margin-right: 15px;
                }
                .logo {
                  cursor: pointer;
                }
                .burger {
                  left: 5%;
                  position: fixed;
                  top: 2.5%;
                  background: ${colors.dark};
                  border-radius: 15px;
                  padding: 12px;
                  z-index: 999;
                  display: flex;
                  align-items: center;
                  justify-content: center;
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
                  justify-content: flex-start;
                  z-index: 99;
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
                  }
                }
                @media screen and (min-width: 968px) {
                  .links {
                    width: 90%;
                    margin-left: -43%;
                    /* // font-size: 30px; */
                    height: 60px;
                    position: absolute;
                    left: 50%;
                    top: 5%;
                    background: none;
                    justify-content: flex-start;
                    flex-flow: row nowrap;
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
