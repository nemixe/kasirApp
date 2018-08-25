import App, { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../styles/_nprogress.css'

Router.events.on('routeChangeStart', (url) => {
  console.log(`loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)

    return { pageProps }
  }


  render() {
    const { pageProps, Component } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}