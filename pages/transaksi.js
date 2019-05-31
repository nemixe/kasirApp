import { Row, Col } from 'antd'
import CardComponent from '../components/card'
import Layout from '../components/_layout'
import { redirectIfnotAuthenticated, isAuthenticated, getJwt } from '../utils/authService'
import { connect } from 'react-redux'
import { getDataTransaksi } from '../actions/actions'

class Transaksi extends React.Component {
  static async getInitialProps(ctx) {
    if (redirectIfnotAuthenticated(ctx)) {
      return {}
    }

    return {
      authenticated: isAuthenticated(ctx),
    }
  }

  componentDidMount() {
    this.props.getDataTransaksi()
  }

  listData() {

    if (typeof this.props.dataTransaksi[0] === 'undefined') {
      return <div>Loading....</div>
    }
    return this.props.dataTransaksi.map(transaksi => {

      const { idBuku, jumlah, _id } = transaksi.buku
      return (
        <Col span={8} style={{ marginBottom: 30 }} key={_id}>
          <CardComponent title={idBuku.namaBuku} kode={`Jumlah barang : ${jumlah}`} jumlah={`Total harga : ${jumlah * idBuku.harga}`} />
        </Col>
      )
    })
  }

  render() {
    return (
      <Layout
        title="Transaksi"
        description="this page is a about list of the history"
        auth={this.props.authenticated}>
        <div className="container">
          <Row type="flex">
            {this.listData()}
          </Row>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = ({ dataTransaksi }) => {
  return { dataTransaksi }
}

export default connect(mapStateToProps, { getDataTransaksi })(Transaksi)