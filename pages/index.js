import { Row, Col, Form, Button, Icon, AutoComplete, InputNumber, message } from 'antd'
import { connect } from 'react-redux'
import { pick } from 'lodash'

import Layout from '../components/_layout'
import CardComponent from '../components/card'
import { redirectIfnotAuthenticated, isAuthenticated, getJwt } from '../utils/authService'
import { submitTransaksi } from '../utils/transaksiService'
import { get } from '../utils/request'

import { addTransaksi, deleteTransaksi } from '../actions/actions'

const FormItem = Form.Item

class Index extends React.Component {
  constructor() {
    super()

    this.tambahTransaksiHandler = this.tambahTransaksiHandler.bind(this)
    this.submitCheckoutHandler = this.submitCheckoutHandler.bind(this)
  }
  static async getInitialProps(ctx) {
    if (redirectIfnotAuthenticated(ctx)) {
      return {}
    }

    return {
      jwt: getJwt(ctx),
      authenticated: isAuthenticated(ctx)
    }
  }

  state = {
    dataSource: [],
    dataBuku: {},
    jumlah: null,
    error: null
  }

  handleSearch = async (value) => {
    this.setState({ dataSource: [], dataBuku: {} })
    let res = await get(`/buku/${value}`, this.props.jwt)
    !res.data.payload.length ? this.setState({ dataSource: [], dataBuku: {} }) : res.data.payload.map(result => {
      this.setState({
        dataSource: [...this.state.dataSource, result.kode],
        dataBuku: {
          idBuku: result._id,
          namaBuku: result.namaBuku,
          hargaBuku: result.harga
        }
      });
    })
  }

  tambahTransaksiHandler() {
    const { dataBuku, jumlah } = this.state
    if (typeof dataBuku.idBuku === 'undefined') {
      return message.error("Buku tidak ditemukan")
    }
    let data = {
      idBuku: dataBuku.idBuku,
      jumlah: jumlah,
      namaBuku: dataBuku.namaBuku,
      totalHarga: jumlah * dataBuku.hargaBuku
    }
    this.props.addTransaksi(data)
  }

  submitCheckoutHandler = async e => {
    e.preventDefault()
    const filter = this.props.transaksi.map(trans => {
      return pick(trans, ['idBuku', 'jumlah'])
    })

    const res = await submitTransaksi(filter)

    if (res === true) {
      message.success("Transaksi sukses")
      this.props.deleteTransaksi()
    } else {
      message.error("Transaksi error")
    }
  }

  render() {
    const { dataSource } = this.state
    return (
      <Layout title="Home" description="index page" auth={this.props.authenticated}>
        <Row type="flex">
          <Col span={16}>
            <Form onSubmit={this.submitCheckoutHandler}>
              <FormItem>
                <div>
                  <AutoComplete
                    dataSource={dataSource}
                    style={{ width: 200 }}
                    onSearch={this.handleSearch}
                    onSelect={this.handleSearch}
                    style={{ width: '45%', marginRight: '8px' }}
                    filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    placeholder="Kode buku"
                  />
                  <InputNumber onChange={(e) => this.setState({ jumlah: e })} placeholder="Jumlah" min={1} max={10} ref="email" />
                </div>
              </FormItem>
              <FormItem>
                <Button type="secondary" htmlType="button" style={{ marginRight: '8px' }} onClick={this.tambahTransaksiHandler}>
                  <Icon type="plus" /> Tambah Data
                </Button>
                <Button type="primary" htmlType="submit" style={{ marginRight: '8px' }}>
                  <Icon type="shopping-cart" /> Checkout
                </Button>
              </FormItem>
            </Form>
          </Col>
          <Col span={8}>
            <Button type="default" style={{ background: '#e0e0e0' }} onClick={() => this.props.deleteTransaksi()}>Reset</Button>
            {this.props.transaksi.map(data => {
              return (
                <CardComponent title={data.namaBuku} kode={`Jumlah barang : ${data.jumlah}`} jumlah={`Total harga : ${data.totalHarga}`} extra={true} />
              )
            })}
          </Col>
        </Row>
      </Layout>
    )
  }
}

function masStateToProps({ transaksi }) {
  return { transaksi }
}

export default connect(masStateToProps, { addTransaksi, deleteTransaksi })(Index)