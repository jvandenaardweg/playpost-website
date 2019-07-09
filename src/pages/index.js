import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from 'components/Layout'
import Cover from 'components/Cover'
import Intro from 'components/Intro'
import Voices from 'components/Voices'
import FeaturePlaylist from 'components/FeaturePlaylist'
import FeatureShare from 'components/FeatureShare'
import Pricing from 'components/Pricing'
// import CustomerResponses from 'components/CustomerResponses'
import NewsletterLarge from 'components/NewsletterLarge'

const Index = ({ data, location }) => {
  const pageDescription =
    'Turn every article on the web into audio using industry leading high quality voices. So you can listen to it just like Podcasts and Audiobooks.'
  const pageTitle = 'Playpost - Instant podcasts of every article'

  return (
    <Layout location={location}>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>
      <Cover />
      <div className="container" id="features">
        <Intro />
        <Voices />
        <FeaturePlaylist />
        <FeatureShare />
        <Pricing />
        {/* <CustomerResponses /> */}
        <NewsletterLarge />
      </div>
    </Layout>
  )
}

export default Index
