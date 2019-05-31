import Head from 'next/head'
import Proptypes from 'prop-types'
import Navbar from './navbar'

import { Row, Col } from 'antd'


class Layout extends React.Component {

  render() {
    return (
      <div role="main">
        <Head>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
        </Head>
        <Navbar auth={this.props.auth} page={this.props.title} />
        <div className="container" style={{ marginTop: '20px' }}>
          <Row type="flex" align="middle">
            <Col span={2} />
            <Col span={20}>
              {this.props.children}
            </Col>
            <Col span={2} />
          </Row>
        </div>

      </div>
    )
  }
}

Layout.propTypes = {
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired
}

export default Layout