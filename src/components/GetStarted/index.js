import React from 'react'
import { Link } from 'gatsby'

import AppStoreBadges from 'components/AppStoreBadges'

import './style.scss'

class GetStarted extends React.Component {
  render() {
    return (
      <section className="get-started py-8" id="get-started">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-8">
              <h3 className="text-white-80">Get started</h3>
              <h2 className="display-4 mb-4 text-white">
                Download Playpost for free
              </h2>
              <div className="col-12">
                <AppStoreBadges centered />
              </div>
              <div className="text-center text-white mt-2">
                And install the browser extension on:{' '}
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
      </section>
    )
  }
}

export default GetStarted
