import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

class CenterHeader extends React.Component {
  render() {
    const { title, description } = this.props

    return (
      <div className="bg-tint mb-5">
        <div className="container">
          <div className="py-5">
            <div className="row justify-content-center text-center py-3">
              <div className="col-12 col-md-8">
                <h1 className="display-4 text-white">{title}</h1>
                <p className="lead mb-0 text-white-80">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CenterHeader
