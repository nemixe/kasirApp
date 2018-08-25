import App, { Container } from 'next/app'
import withNProgress from 'next-nprogress'
import NProgressStyles from 'next-nprogress/styles'

// import Router from 'next/router'
// import NProgress from 'nprogress'
// import '../styles/_nprogress.css'

// Router.events.on('routeChangeStart', (url) => {
//   console.log(`loading: ${url}`)
//   NProgress.start()
// })
// Router.events.on('routeChangeComplete', () => NProgress.done())
// Router.events.on('routeChangeError', () => NProgress.done())
// Router.onRouteChangeStart((url) => {
//   console.log(`loading: ${url}`)
//   NProgress.start()
// })
// Router.onRouteChangeComplete(() => NProgress.done())
// Router.onRouteChangeError(() => NProgress.done())

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)

    return { pageProps }
  }


  render() {
    const { pageProps, Component } = this.props
    return (
      <Container>
        <NProgressStyles color="#29d" spinner={false} />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default withNProgress(50)(MyApp)