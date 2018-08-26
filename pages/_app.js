import App, { Container } from 'next/app'
import withNProgress from 'next-nprogress'
import NProgressStyles from 'next-nprogress/styles'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)

    return { pageProps }
  }

  componentDidMount() {
    if (
      process.env.NODE_ENV === 'production' &&
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(function (reg) {
          console.log('Service worker registered (0-0) ')
        })
        .catch(function (e) {
          console.error('Error during service worker registration:', e)
        })
    }
  }

  render() {
    const { pageProps, Component } = this.props
    return (
      <Container>
        <NProgressStyles color="#b532e5" spinner={false} />
        <Component {...pageProps} />
      </Container>
    )
  }
}

const delay = 200

export default withNProgress(delay)(MyApp)