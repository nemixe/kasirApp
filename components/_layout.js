import Head from 'next/head'
import Proptypes from 'prop-types'
import Link from 'next/link'

export default class extends React.Component {
  render() {
    return (
      <div role="main">
        <Head>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
        </Head>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/tes">
            <a>tes</a>
          </Link>
        </div>

        {this.props.children}

      </div>
    )
  }
}