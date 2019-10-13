import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from 'gatsby'

import './style.scss'

import coverImage from '../../../static/img/example-cover.png'
import { scrollIt } from '../../utils/scroll'
import {
  APPLE_APP_STORE_URL,
  GOOGLE_PLAY_STORE_URL,
} from '../../constants/urls'
import AppStoreBadges from 'components/AppStoreBadges/index'

class Cover extends React.Component {
  handleOnClick = event => {
    event.preventDefault()
    scrollIt(document.getElementById('newsletter'))
  }

  render() {
    const { location, title } = this.props

    return (
      <div className="cover">
        <div className="container">
          <div className="row justify-content-between align-items-center py-5">
            <div className="col-12 col-md-6 order-1 order-md-1">
              <h1 className="cover__title display-4">
                Instant podcasts of every article
              </h1>
              <p className="cover__lead large mb-3">
                Playpost transforms every article on the web into audio using
                industry-leading high-quality voices. So you can listen to it
                just like Podcasts and Audiobooks.
              </p>
              <div className="row align-items-center">
                <div className="cover__badges col-12">
                  <AppStoreBadges />
                </div>
                <div className="col-12 col-lg-12 text-center text-md-left text-white">
                  <div className="cover__small small ml-md-6 mt-2">
                    <span>Save articles from your browser using:</span>{' '}
                    <Link className="text-white font-weight-bold" to="/chrome">
                      Chrome
                    </Link>
                    ,{' '}
                    <Link className="text-white font-weight-bold" to="/firefox">
                      Firefox
                    </Link>{' '}
                    or{' '}
                    <Link className="text-white font-weight-bold" to="/opera">
                      Opera
                    </Link>
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
