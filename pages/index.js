import Layout from '../components/_layout'
import Tooltip from 'antd/lib/tooltip'
export default class extends React.Component {
  render() {
    return (
      <Layout title="index" description="index page">
        <div className="outer">
          <div className="middle">
            <div className="inner">
              <h1>Nextmoon JS</h1>
              <p>a nextjs boilerplate that include PWA, Redux, Ant Design with next-less supported and more..</p>
            </div>
          </div>
        </div>
        <a href="https://github.com/nemixe/Nextmoon">
          <Tooltip title="Click to get the repository" placement="topRight" arrowPointAtCenter>
            <img src="/static/github.png" className="github" />
          </Tooltip>
        </a>
        <style jsx>{`
        .outer {
          display: table;
          position: absolute;
          height: 90%;
          width: 100%;
        }
        
        .middle {
          display: table-cell;
          vertical-align: middle;
        }
        
        .inner {
          margin-left: auto;
          margin-right: auto;
          width: 400px;
          text-align: center;
        }
        .github {
          position: absolute;
          width: 70px;
          bottom: 30px;
          right: 30px;
        }
        `}</style>
      </Layout>
    )
  }
}