import React from 'react'
import { Link } from 'gatsby'

import { APPLE_APP_STORE_URL } from '../../constants/urls'
import playlistImage from '../../../static/img/example-playlist.png'

class Features extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <div className="row justify-content-between align-items-center py-5">
        <div className="col-12 col-md-5 order-2 order-md-1">
          <h4 className="text-black-50">Easy to use</h4>
          <h2>Just like a music app playlist, but for articles</h2>
          <p>
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast
          </p>

          <ul className="custom-list mb-4">
            <li className="font-weight-semibold">
              Archive already listened articles
            </li>
            <li className="font-weight-semibold">
              Favorite your favorites for future reference
            </li>
            <li className="font-weight-semibold">
              Playback controls in full view
            </li>
            {/* <li className="font-weight-semibold">
              Drag and drop to re-order your playlist
            </li> */}
          </ul>
          <a className="action-link" href={APPLE_APP_STORE_URL}>
            <span>Get started with the iPhone app</span>
          </a>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2 pl-md-0 mb-4 mb-md-0">
          <img className="w-100" src={playlistImage} alt="Playpost playlist" />
        </div>
      </div>
    )
  }
}

export default Features
