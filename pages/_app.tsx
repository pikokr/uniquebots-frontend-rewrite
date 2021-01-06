import React, { Component } from 'react'
import Layout from '../components/Layout'
import '../styles/global.css'

class MyApp extends Component<any> {
  componentDidMount() {
    const dark = !!localStorage.getItem('dark')
    if (dark) {
      document.querySelector('html')!.classList.add('dark')
    } else {
      document.querySelector('html')!.classList.remove('dark')
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
