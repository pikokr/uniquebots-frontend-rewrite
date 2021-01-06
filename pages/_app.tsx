import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Layout from '../components/Layout'
import '../styles/global.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import withApolloClient from '../lib/apollo'
import { ApolloProvider } from 'react-apollo'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

library.add(fas)

function MyApp({ Component, pageProps, apollo }: any) {
  if (typeof localStorage !== 'undefined') {
    const dark = !!localStorage.getItem('dark')
    if (dark) {
      document.querySelector('html')!.classList.add('dark')
    } else {
      document.querySelector('html')!.classList.remove('dark')
    }
  }
  return (
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default withApolloClient(MyApp)
