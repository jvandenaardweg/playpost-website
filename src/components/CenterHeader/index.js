import React from 'react'
import { Link } from 'gatsby'
import Button from 'components/Button/index'
// import './style.scss'

class CenterHeader extends React.Component {
  render() {
    const { title, description, button } = this.props

    return (
      <div className="bg-tint mb-5">
        <div className="container">
          <div className="py-5">
            <div className="row justify-content-center text-center py-3">
              <div className="col-12 col-md-10">
                <h1 className="display-4 text-white">{title}</h1>
              </div>
              <div class="col-12 col-md-7">
                <p className="lead mb-0 text-white-80">{description}</p>
                {!!this.props.button && (
                  <div className="mt-4">{this.props.button}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CenterHeader
