import { signOut } from '../utils/authService'
import { authToggle } from '../actions/actions'
import { connect } from 'react-redux'
class Logout extends React.Component {
  componentDidMount() {
    signOut()
    this.props.authToggle(false)
  }

  render() {
    return <div>...loading</div>
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps, { authToggle })(Logout)