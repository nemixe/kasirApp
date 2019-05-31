import App, { Container } from 'next/app'
import withNProgress from 'next-nprogress'
import NProgressComponent from 'next-nprogress/component'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import jwt from 'jsonwebtoken'
import { authToggle } from '../actions/actions'
import { getJwt } from '../utils/authService'
import '../style/theme.less'
import { setToken } from '../actions/actions'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    const { token } = ctx.store.getState()

    !!getJwt(ctx) && !!token && ctx.store.dispatch(setToken(getJwt(ctx)))


    jwt.verify(getJwt(ctx), '1n1p455w0rd', (err, decoded) => {
      if (err) {
        ctx.store.dispatch(authToggle(false))
        return
      }
      ctx.store.dispatch(authToggle(true))
    })

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
    const { pageProps, Component, store } = this.props

    return (
      <Provider store={store}>
        <Container>
          <NProgressComponent color="#5b8cff" spinner={false} />
          <Component {...pageProps} />
        </Container>
      </Provider>
    )
  }
}

const delay = 200
const setting = { showSpinner: false }
import initialStore from '../utils/store'

export default withRedux(initialStore, {
  debug: typeof window != 'undefined' && process.env.NODE_ENV !== 'production'
})(withNProgress(delay, setting)(MyApp))