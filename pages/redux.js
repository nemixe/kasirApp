import { addTodo } from '../actions/todo'
import { connect } from 'react-redux'
import { Button } from 'antd'
class Redux extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.Todo}</p>
        <Button onClick={this.props.addTodo}>Increment</Button>
      </div>
    )
  }
}

function mapStatetoProps({ Todo }) {
  return { Todo }
}

export default connect(mapStatetoProps, { addTodo })(Redux)