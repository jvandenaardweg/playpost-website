import React from 'react'
import playlistImage from '../../../static/img/example-playlist.png'

class FeaturePlaylist extends React.Component {
  render() {
    return (
      <div className="row justify-content-between align-items-center py-5">
        <div className="col-12 col-md-5 order-2 order-md-1">
          <h4 className="text-black-50">Easy to use</h4>
          <h2>Just like a playlist, but for articles</h2>
          <p>
            In Playpost a article is just a playlist item like a track on
            Spotify. Or a Podcast in the Podcasts app.
          </p>

          <ul className="custom-list mb-4">
            <li className="font-weight-semibold">
              Press play to listen to articles
            </li>
            <li className="font-weight-semibold">
              Archive already listened articles
            </li>
            <li className="font-weight-semibold">
              Favorite your favorites for future reference
            </li>
            <li className="font-weight-semibold">
              Playback controls in full view
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2 pl-md-0 mb-4 mb-md-0">
          <img className="w-100" src={playlistImage} alt="Playpost playlist" />
        </div>
      </div>
    )
  }
}

export default FeaturePlaylist
