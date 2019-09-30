import React from 'react'
import { Link } from 'gatsby'

import appsImage from '../../../static/img/example-apps.png'

class FeatureShare extends React.Component {
  render() {
    return (
      <section className="share py-8" id="share">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-5 pl-md-0 mb-4 mb-md-0">
            <img
              className="w-100"
              src={appsImage}
              alt="Playlist supported Apps"
            />
          </div>
          <div className="col-12 col-md-5">
            <h3 className="text-black-50">Multiple apps supported</h3>
            <h2>Easily save articles from every app</h2>
            <p>
              A share button is added to every app. So you can share articles
              from one app, to your Playpost playlist.
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
            <div className="mt-4">
              <h2>Save from your computer</h2>
              <p className="mb-0">
                Use our browser extension for <Link to="/chrome">Chrome</Link>,{' '}
                <Link to="/firefox">Firefox</Link>
                {' or '}
                <Link to="/opera">Opera</Link> to save articles from your
                computer to your playlist.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default FeatureShare
