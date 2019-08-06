import Header from "../components/Header"

import colors from "../lib/colors"

export default ({ children }) => (
  <main>
    <Header />
    {children}
    <style jsx global>{`
      * {
        font-family: "Titillium Web", sans-serif;
      }
      body,
      html {
        padding: 0;
        margin: 0;
        background: ${colors.dark};
        color: ${colors.light};
      }
      /* Ugly hack */
      body {
        margin-top: -6.66vh;
      }
      h1 {
        font-family: "Varela Round", sans-serif;
      }
      h2,
      h3,
      h4 {
        font-family: "Amatic SC", cursive;
        font-size: 1.8em;
        color: ${colors.light};
        font-weight: 100;
      }
      a {
        color: white;
        font-family: "Amatic SC", cursive;
        text-decoration: none;
      }
      p {
        color: ${colors.light};
        font-size: 1em;
        line-height: 18px;
      }
      .color1 p {
        color: ${colors.color1};
      }
      .dark p {
        color: ${colors.dark};
      }
      .medium p {
        font-size: 1.2em;
      }
      .large p {
        font-size: 1.5em;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22bad9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      button:active {
        background-color: #1b9db7;
        transition: background-color 0.3s;
      }
      button:focus {
        outline: none;
      }
      .ql-video {
        width: 100%;
        height: 50vh;
      }
    `}</style>
  </main>
)
