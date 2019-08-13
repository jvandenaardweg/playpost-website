import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { APPLE_APP_STORE_URL } from '../../constants/urls'

import appsImage from '../../../static/img/example-apps.png'

class FeatureShare extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <div className="row justify-content-between align-items-center py-5">
        <div className="col-12 col-md-5 pl-md-0 mb-4 mb-md-0">
          <img
            className="w-100"
            src={appsImage}
            alt="Playlist supported Apps"
          />
        </div>
        <div className="col-12 col-md-5">
          <h4 className="text-black-50">Multiple apps supported</h4>
          <h2>
            Easily save articles to your playlist from every app on your phone
          </h2>
          <p>
            During installation of Playpost, a share button is added to every
            app. So you can share articles from one app, to your Playpost
            playlist. on your phone to share articles to your playlist. Just
            open your article and press share.
          </p>
          <ol className="custom-ordered-list mb-0">
            <li className="font-weight-semibold">
              Tap the “Share” icon in your other Apps
            </li>
            <li className="font-weight-semibold">Select the Playpost app</li>
            <li className="font-weight-semibold">
              The article is saved in your playlist
            </li>
          </ol>
          <br />
          <OutboundLink
            className="btn btn-primary btn-lg font-weight-semibold"
            href={APPLE_APP_STORE_URL}
          >
            Get iPhone App
          </OutboundLink>
        </div>
      </div>
    )
  }
}

export default FeatureShare
