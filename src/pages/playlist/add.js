import React from 'react'
import { Helmet } from 'react-helmet'

import Intro from 'components/Intro'
import GetStarted from 'components/GetStarted'
import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'
import AppStoreBadges from 'components/AppStoreBadges/index'

class PlaylistAdd extends React.Component {
  render() {
    const { location } = this.props

    const pageTitle = 'Add articles to your playlist'
    const pageDescription = `Install the Playpost app for iOS or Android and save articles directly to your playlist.`

    return (
      <Layout location={location}>
        <Helmet>
          <title>{pageTitle} - Playpost</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
        </Helmet>
        <CenterHeader title={pageTitle} description={pageDescription}>
          <div className="col-12">
            <AppStoreBadges centered />
          </div>
        </CenterHeader>
        <div className="container">
          <div className="d-flex justify-content-center mb-1">
            <Intro />
          </div>
        </div>
        <GetStarted />
      </Layout>
    )
  }
}

export default PlaylistAdd
