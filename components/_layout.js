import Head from 'next/head'
import Proptypes from 'prop-types'

export default class extends React.Component {
  render() {
    return (
      <div role="main">
        <Head>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
        </Head>

        {this.props.children}

      </div>
    )
  }
}