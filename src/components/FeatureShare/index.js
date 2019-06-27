import React from 'react'
import { Link } from 'gatsby'

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
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast
          </p>
          <ol className="custom-list mb-0">
            <li className="font-weight-semibold">
              Tap the “Share” icon in your other Apps
            </li>
            <li className="font-weight-semibold">Select the Playpost app</li>
            <li className="font-weight-semibold">
              The article is saved in your playlist
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default FeatureShare
