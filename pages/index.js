import Layout from '../components/_layout'

export default class extends React.Component {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => console.log("service worker registration successful"))
        .catch(err => console.warn("service worker registration failed : ", err.message))
    }
  }

  render() {
    return (
      <Layout title="index" description="index page">
        Index Page
      </Layout>
    )
  }
}