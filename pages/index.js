import Layout from '../components/_layout'
import { redirectIfnotAuthenticated, isAuthenticated } from '../utils/authService'
class Index extends React.Component {
  static async getInitialProps(ctx) {
    if (redirectIfnotAuthenticated(ctx)) {
      return {}
    }
    return {
      authenticated: isAuthenticated(ctx)
    }
  }

  render() {
    return (
      <Layout title="Kasir" description="index page" auth={this.props.authenticated}>
        <div className="container">
          Index Page
        </div>
      </Layout>
    )
  }
}

export default Index