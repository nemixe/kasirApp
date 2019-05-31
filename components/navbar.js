import Link from 'next/link'
import { Menu, Icon } from 'antd'


class Navbar extends React.Component {
  state = {
    current: this.props.page,
  }

  render() {
    var buttonAuth;
    if (this.props.auth) {
      buttonAuth = <Link href="logout"><a><Icon type="logout" />Logout</a></Link>
    } else {
      buttonAuth = <Link href="login"><a><Icon type="login" />Login</a></Link>
    }
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal">
          <Menu.Item key="Home">
            <Link href="/index"><a><Icon type="home" />Home</a></Link>
          </Menu.Item>
          <Menu.Item key="Transaksi">
            <Link href="/transaksi"><a><Icon type="shopping" />Transaksi</a></Link>
          </Menu.Item>
          <Menu.Item key="Buku">
            <Link href="http://localhost:3000/buku"><a><Icon type="book" />Buku</a></Link>
          </Menu.Item>
          <Menu.Item key="Login" style={{ float: 'right' }}>
            {buttonAuth}
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Navbar