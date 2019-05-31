import { Form, Input, Button, Row, Col, message } from 'antd'
import Layout from '../components/_layout'
import { signIn, redirectIfAuthenticated, isAuthenticated, getJwt } from '../utils/authService'
import { connect } from 'react-redux'
import { authToggle } from '../actions/actions'
import { Link } from '../routes'

const FormItem = Form.Item

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
    this.loginHandler = this.loginHandler.bind(this)
    this.state = {
      error: null
    }
  }

  loginHandler = async e => {
    e.preventDefault()
    const email = this.refs.email.value
    const password = this.refs.password.value

    const error = await signIn(email, password)
    if (error) {
      return message.error(error)
    }
    this.props.authToggle(true)
  }

  render() {
    return (
      <Layout title="Login" description="login page" auth={this.props.authenticated}>

        <h1>
          Login
        </h1>

        {this.state.error ? <div>{this.state.error}</div> : null}
        <Row type="flex" align="middle">
          <Col span={10}>
            <Form onSubmit={this.loginHandler}>
              <FormItem>
                <input placeholder="Email" type="text" name="email" ref="email" className="ant-input" />
              </FormItem>
              <FormItem>
                <input placeholder="Password" type="password" name="password" ref="password" className="ant-input" />
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">Login</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>

        <Link route="/register">
          <a>Register</a>
        </Link>
      </Layout>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps, { authToggle })(Login)