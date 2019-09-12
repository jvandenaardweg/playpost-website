import React from 'react'
import { Helmet } from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'
import { FIREFOX_EXTENSION_URL } from '../constants/urls'

class Firefox extends React.Component {
  render() {
    const { location } = this.props

    const pageTitle = 'Firefox browser extension'
    const pageDescription = `Save articles directly to your playlist from your Mozilla Firefox browser using the "Save to Playpost" desktop browser extension.`

    return (
      <Layout location={location}>
        <Helmet>
          <title>{pageTitle} - Playpost</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta property="og:url" content="https://playpost.app/firefox" />
        </Helmet>
        <CenterHeader
          title={pageTitle}
          description={pageDescription}
          button={
            <OutboundLink
              href={FIREFOX_EXTENSION_URL}
              className="btn btn-lg btn-white font-weight-semibold"
            >
              Install Firefox extension
            </OutboundLink>
          }
        />
        <div className="container">
          <div className="d-flex justify-content-center mb-1">
            <div className="px-1">
              <div class="row justify-content-between align-items-center mb-5">
                <div class="col-12 col-md-6 order-2 order-md-1">
                  <h3 className="text-black-50">Easy to use</h3>
                  <h1 class="display-4">
                    Add articles to your playlist from your computer
                  </h1>
                  <a class="action-link" href={FIREFOX_EXTENSION_URL}>
                    <span>Get started</span>
                  </a>
                </div>
                <div class="col-12 col-md-6 order-1 order-md-2 pl-md-0 mb-4 mb-md-0">
                  <img
                    src={require('../../static/img/browser-extension-transparent.png')}
                  />
                </div>
              </div>
              <div className="row pb-md-4">
                <div className="col-12 col-md-4 mb-3">
                  <h3 className="font-weight-semibold mb-1 mt-md-2">
                    Listen in the iOS or Android app
                  </h3>
                  <p>
                    Articles saved from the Firefox extension are saved to your
                    playlist in the iOS or Android app. Just open the app and
                    press play.
                  </p>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <h3 className="font-weight-semibold mb-1 mt-md-2">
                    Customize the extension
                  </h3>
                  <p>
                    Use our auto-close feature to automatically close the
                    extension when saved. Use the auto-save feature to
                    automatically save an article when opening the extension.
                  </p>
                </div>
                <div className="col-12 col-md-4 mb-3">
                  <h3 className="font-weight-semibold mb-1 mt-md-2">
                    Your subscriber-only content
                  </h3>
                  <p>
                    Gain access to your personal subscriber-only content. Login
                    to your favorite website and save your articles to your own
                    playlist using the browser extension.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Firefox
