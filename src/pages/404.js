import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'

class NotFound extends React.Component {
  render() {
    const { location, title } = this.props
    const pageTitle = 'Oh oh... Not found'
    const pageDescription = 'Seems like the page is not here (anymore).'

    return (
      <Layout location={location} hideFooter>
        <Helmet>
          <title>{pageTitle} - Playpost</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta name="twitter:card" content={pageTitle} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="robots" content="noindex,follow" />
        </Helmet>
        <CenterHeader title={pageTitle} description={pageDescription} />
      </Layout>
    )
  }
}

export default NotFound
