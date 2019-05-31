import { Card, Row, Col, Button, Tooltip } from 'antd';

import Layout from '../components/_layout'
import { redirectIfnotAuthenticated, isAuthenticated, getJwt } from '../utils/authService'
import { get } from '../utils/request'
import Link from 'next/link'

const { Meta } = Card;

class Buku extends React.Component {
  constructor() {
    super()
    this.listBukuHandler = this.listBukuHandler.bind(this)
  }

  static async getInitialProps(ctx) {
    if (redirectIfnotAuthenticated(ctx)) {
      return {}
    }

    const res = await get('/buku', getJwt(ctx))

    return {
      authenticated: isAuthenticated(ctx),
      data: res.data
    }
  }

  listBukuHandler() {
    return this.props.data.payload.map(buku => {
      return (
        <Col span={6} style={{ marginBottom: 30 }}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://pngimage.net/wp-content/uploads/2018/05/book-cover-png.png" />}
          >
            <Meta style={{ textAlign: 'center' }}
              title={buku.namaBuku}
              description={`Tersisa ${buku.jumlahBuku} Stock`}
            />
          </Card>
        </Col>
      )
    })
  }

  render() {
    return (
      <Layout title="Buku" description="List data buku" auth={this.props.authenticated}>
        <Row type="flex">
          {this.listBukuHandler()}
        </Row>
        <Link href="buku/tambahBuku">
          <a>
            <Tooltip title="Click to get the repository" placement="topRight" arrowPointAtCenter>
              <Button type="primary" shape="circle" style={{ position: 'absolute', right: '20px', bottom: '20px' }}>+</Button>
            </Tooltip>
          </a>
        </Link>
      </Layout>
    )
  }
}

export default Buku