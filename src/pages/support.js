import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'

class Support extends React.Component {
  componentDidMount() {
    typeof window !== 'undefined' &&
      window.drift.on('ready', (api, payload) => {
        api.openChat()
      })
  }

  openChat = event => {
    event.preventDefault()
    typeof window !== 'undefined' && window.drift && window.drift.api.openChat()
  }

  render() {
    const { location, title } = this.props

    const pageTitle = 'Hi, how can we help?'
    const pageDescription =
      "Questions, bug reports, feedback, feature requests — we're here for it all. Start a live chat or e-mail us."

    return (
      <Layout location={location}>
        <Helmet>
          <title>{pageTitle} - Playpost</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="robots" content="noindex,follow" />
        </Helmet>
        <CenterHeader title={pageTitle} description={pageDescription} />
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '30vh', flexDirection: 'column' }}
          >
            <button
              className="btn btn-lg btn-primary font-weight-bold"
              type="button"
              onClick={this.openChat}
            >
              Start live chat
            </button>
            <div className="mt-4">
              <p>
                Or contact us at{' '}
                <a href="mailto:support@playpost.app">support@playpost.app</a>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Support
