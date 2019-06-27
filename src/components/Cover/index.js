import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

import coverImage from '../../../static/img/example-cover.png'

class Cover extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <div className="bg-tint">
        <div className="container">
          <div className="row justify-content-between align-items-center py-5">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <h1 className="display-4 text-white">
                Instant podcasts of every article
              </h1>
              <p className="large mb-4 text-white-80">
                Turn every article on the web into audio using industry leading
                high quality voices. So you can listen to it just like Podcasts
                and Audiobooks.
              </p>
              <div className="row align-items-center">
                <div className="col-12 col-md-5 mb-2 mb-md-0">
                  <a
                    className="btn btn-block btn-lg btn-white font-weight-semibold"
                    href=""
                  >
                    Get iPhone App
                  </a>
                </div>
                <div className="col-12 col-md-6 text-center text-md-left text-white">
                  <div className="small ml-md-6">
                    Android App will be available later this year. &nbsp;
                    <a className="text-white" href="">
                      <strong>Subscribe for updates</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 order-1 order-md-2 pl-md-0 mb-4 mb-md-0">
              <img
                className="w-100 cover-image"
                src={coverImage}
                alt="Playpost"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cover
