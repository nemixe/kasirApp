import Layout from '../components/_layout'
import { signIn, redirectIfAuthenticated, isAuthenticated, getJwt } from '../utils/authService'
import { connect } from 'react-redux'
import { authToggle } from '../actions/actions'

class Login extends React.Component {
  static async getInitialProps(ctx) {
    if (redirectIfAuthenticated(ctx)) {
      return {}
    }
    return {
      authenticated: isAuthenticated(ctx)
    }
  }

  constructor() {
    super()
    this.submitRegistration = this.submitRegistration.bind(this)
    this.state = {
      error: null
    }
  }

  submitRegistration = async e => {
    e.preventDefault()
    const email = this.refs.email.value
    const password = this.refs.password.value

    const error = await signIn(email, password)
    if (error) {
      this.setState({ error })
      return false
    }
    this.props.authToggle(true)
  }

  render() {
    return (
      <Layout title="Login" description="login page" auth={this.props.authenticated}>
        <div className="container">
          <form onSubmit={this.submitRegistration}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" ref="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" ref="password" />
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </Layout>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps, { authToggle })(Login)