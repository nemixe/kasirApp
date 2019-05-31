import { Card, Avatar } from 'antd';

const { Meta } = Card
export default props => {
  return (
    <div>
      <Card title={props.title} style={{ width: 300, marginTop: 16 }} loading={false}>
        <Meta
          avatar={<Avatar src="/static/book.svg" />}
          title={props.kode}
          description={props.jumlah}
        />
      </Card>
    </div>
  )
}