import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

class CenterHeader extends React.Component {
  render() {
    const { title, description } = this.props

    return (
      <div className="py-5">
        <div className="row justify-content-center text-center py-3">
          <div className="col-12 col-md-8">
            <h1 className="display-4">{title}</h1>
            <p className="lead mb-4">{description}</p>
            {/* <div className="d-flex justify-content-center">
              <div className="px-1">
                <a className="btn btn-lg btn-primary" href="">
                  Action
                </a>
              </div>
              <div className="px-1">
                <a className="btn btn-lg btn-outline-primary" href="">
                  Action
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default CenterHeader
