import { useState, useEffect } from "react"
import App from "../components/App"
import Router from "next/router"
import Link from "next/link"

import Welcome from "../components/Welcome"
import CategoryHeader from "../components/CategoryHeader"
import PageLayout from "../components/PageLayout"
import Loading from "../components/Loading"

import colors from "../lib/colors"

export default () => {
  const [theme, setTheme] = useState({
    backgroundImage: null,
    backgroundColor: null,
    backgroundPattern: null
  })
  let slug = null
  if (Router.router) {
    slug = Router.router.query.slug
  }

  useEffect(() => {
    if (slug) {
      switch (slug) {
        case "cultura-e-conhecimento":
          return setTheme({
            backgroundImage: "cultura-e-conhecimento",
            backgroundColor: colors.light3,
            backgroundPattern: "pattern_4",
            artFilter: " hue-rotate(255deg) brightness(80%) contrast(80%)"
          })
        case "fortalecimento-institucional-e-politico":
          return setTheme({
            backgroundImage: "fortalecimento-institucional-e-politico",
            backgroundColor: colors.light2,
            backgroundPattern: "pattern_2",
            artFilter: " hue-rotate(255deg) brightness(80%) contrast(80%)"
          })
        case "atividades-produtivas-e-geracao-de-rende":
          return setTheme({
            backgroundImage: "atividades-produtivas-e-geracao-de-rende",
            backgroundColor: colors.color3,
            backgroundPattern: "pattern_2",
            artFilter:
              "invert(81%) sepia(10%) saturate(670%) hue-rotate(355deg) brightness(105%) contrast(95%)"
          })
        case "atividades-produtivas-e-geracao-de-renda":
          return setTheme({
            backgroundImage: "atividades-produtivas-e-geracao-de-renda",
            backgroundColor: colors.color3,
            backgroundPattern: "pattern_2",
            color: colors.light2,
            artFilter:
              "invert(81%) sepia(10%) saturate(670%) hue-rotate(355deg) brightness(105%) contrast(95%)"
          })
        case "gestao-ambiental-e-territorial":
          return setTheme({
            backgroundImage: "gestao-ambiental-e-territorial",
            backgroundColor: colors.color2,
            backgroundPattern: "pattern_6",
            color: colors.light2,
            artFilter:
              "invert(81%) sepia(10%) saturate(670%) hue-rotate(355deg) brightness(105%) contrast(95%)"
          })
      }
    }
  }, [slug])

  return (
    <App>
      {theme.backgroundImage && (
        <Welcome
          background={`/static/${theme.backgroundImage}.png`}
          height='95vh'
        />
      )}
      {!theme.backgroundImage && <Welcome height='95vh' />}
      <div className='pattern'>
        {slug ? (
          <div>
            <div className='header'>
              <CategoryHeader
                slug={slug}
                color={theme.color}
                artFilter={theme.artFilter}
              />
            </div>
            <PageLayout
              slug={slug}
              main='projects'
              tagTitleColor={theme.color}
            />
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <style jsx>{`
        .pattern {
          background: ${theme.backgroundColor || colors.light2};
          background-image: url("/static/${theme.backgroundPattern ||
            "pattern_1"}.png");
          background-repeat: round;
          margin-top: -5vh;
          padding-bottom: 20vh;
        }
        .header {
          background: ${theme.backgroundColor || colors.light2};
          padding: 30px 0;
        }
      `}</style>
    </App>
  )
}
