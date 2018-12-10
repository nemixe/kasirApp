import Layout from '../components/_layout'
import { redirectIfnotAuthenticated, isAuthenticated } from '../utils/authService'
class List extends React.Component {
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
      <Layout title="List History" description="this page is a about list of the history" auth={this.props.authenticated}>
        <div className="container">
          list history page
      </div>
      </Layout>
    )

  }
}
export default List