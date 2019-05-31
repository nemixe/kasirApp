import Layout from '../../components/_layout'
import { redirectIfnotAuthenticated, isAuthenticated } from '../../utils/authService'
import { Form, InputNumber, Button } from 'antd'
class TambahBuku extends React.Component {
  static async getInitialProps(ctx) {
    if (redirectIfnotAuthenticated(ctx)) {
      return {}
    }

    return {
      authenticated: isAuthenticated(ctx)
    }
  }

  onSubmit = async (e) => {
    e.preventDefault()
    console.log()
  }

  render() {
    return (
      <Layout title="Tambah Buku" description="Halaman untuk menambah buku" auth={this.props.authenticated}>
        <Form onSubmit={this.onSubmit}>
          <input type="text" name="namaBuku" placeholder="Nama buku" className="ant-input" />
          <input type="text" name="Kode" placeholder="Kode" className="ant-input" />
          <input type="text" name="Harga" placeholder="Harga" className="ant-input" />
          <InputNumber placeholder="kode" />
          <Button htmlType="submit">Add</Button>
        </Form>
      </Layout>
    )
  }
}

export default TambahBuku