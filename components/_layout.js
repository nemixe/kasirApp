import Head from 'next/head'
import Proptypes from 'prop-types'
import Link from 'next/link'

class Layout extends React.Component {
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
          <Link href="/redux">
            <a>redux</a>
          </Link>
        </div>

        {this.props.children}

      </div>
    )
  }
}

Layout.propTypes = {
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired
}

export default Layout