import Link from 'next/link'

class Navbar extends React.Component {

  render() {
    var buttonAuth;
    if (this.props.auth) {
      buttonAuth = <Link href="logout"><a>logout</a></Link>
    } else {
      buttonAuth = <Link href="login"><a>Login</a></Link>
    }
    return (
      <div>
        <Link href="index"><a>Home</a></Link>
        <Link href="list"><a>List</a></Link>
        {buttonAuth}
      </div>
    )
  }
}

export default Navbar