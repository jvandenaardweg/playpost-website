import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import './style.scss'

import coverImage from '../../../static/img/example-cover.png'
import { scrollIt } from '../../utils/scroll'
import { APPLE_APP_STORE_URL } from '../../constants/urls'

class Cover extends React.Component {
  handleOnClick = event => {
    event.preventDefault()
    scrollIt(document.getElementById('newsletter'))
  }

  render() {
    const { location, title } = this.props

    return (
      <div className="bg-tint">
        <div className="container">
          <div className="row justify-content-between align-items-center py-5">
            <div className="col-12 col-md-6 order-1 order-md-1">
              <h1 className="display-4 text-white">
                Instant podcasts of every article
              </h1>
              <p className="large mb-4 text-white-80">
                Turn every article on the web into audio using industry leading
                high quality voices. So you can listen to it just like Podcasts
                and Audiobooks.
              </p>
              <div className="row align-items-center">
                <div className="col-12 col-lg-5 mb-2 mb-md-2 mb-lg-0">
                  <OutboundLink
                    className="btn btn-block btn-lg btn-white font-weight-semibold"
                    href={APPLE_APP_STORE_URL}
                  >
                    Get iPhone App
                  </OutboundLink>
                </div>
                <div className="col-12 col-lg-6 text-center text-md-left text-white">
                  <div className="small ml-md-6">
                    Android App will be available later this year.
                    <a
                      className="text-white font-weight-bold"
                      href=""
                      onClick={this.handleOnClick}
                    >
                      <span>&nbsp;Subscribe for updates</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 order-2 order-md-2 pl-md-0 mb-md-0">
              <div className="cover-image">
                <img className="w-100" src={coverImage} alt="Playpost" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cover
