import App, { Container } from 'next/app'
import React from 'react'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'
import { PageTransition } from 'next-page-transitions'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo.config'

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, route: router.route }
  }

  render () {
    const { Component, pageProps, route, apolloClient } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://www.url.ie/',
            site_name: 'SiteName'
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image'
          }}
        />
        <PageTransition timeout={300} classNames='page-transition'>
          <Component {...pageProps} key={route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </ApolloProvider>
    )
  }
}

export default withApolloClient(MyApp)
