import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import appsImage from '../../../static/img/example-apps.png'
import {
  GOOGLE_CHROME_EXTENSION_URL,
  FIREFOX_EXTENSION_URL,
  OPERA_EXTENSION_URL,
} from '../../constants/urls'

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
            <div className="mt-4">
              <h2>Save from your computer</h2>
              <p className="mb-0">
                Use our browser extension for{' '}
                <OutboundLink href={GOOGLE_CHROME_EXTENSION_URL}>
                  Chrome
                </OutboundLink>
                ,{' '}
                <OutboundLink href={FIREFOX_EXTENSION_URL}>Firefox</OutboundLink>{' '}
                or <OutboundLink href={OPERA_EXTENSION_URL}>Opera</OutboundLink>{' '}
                to save articles from your computer to your playlist.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default FeatureShare
