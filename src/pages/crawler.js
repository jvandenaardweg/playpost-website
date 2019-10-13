import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'
import Card from 'components/Card'

class Crawler extends React.Component {
  render() {
    const { location, title } = this.props
    const pageTitle = 'About our Crawler'
    const pageDescription =
      'You probably noticed "PlaypostCrawler/1.0" is coming up in your server logs or analytics software. It\'s our friendly little crawler to get information about links people share in Playpost.'

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
        <div className="container mb-4 mt-lg-5 mt-3">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <Card
                title="Current Crawler User Agent"
                content="PlaypostCrawler/1.0 (+https://playpost.app/crawler)"
              />
              <h2>About this crawler</h2>
              <p>
                Playpost is a service that allows users to save article's to
                their personal playlist and then create audio of that article.
                So they can listen to articles, instead of reading them.
              </p>
              <p>
                The crawler is part of how Playpost works. It involves crawling
                the user's saved articles to retrieve information such as the
                title, description, content, images and other article related
                data so the system can show the user information about the
                article.
              </p>

              <p>
                Playpost does not save any aticle data unless a particular user
                requests it. That said, the article data is only available for
                the user that saved it through Playpost’s service.
              </p>

              <h2>Need assistence?</h2>
              <p>
                If you have any questions or concerns about any links or content
                saved by one of our users, please contact us at
                info@playpost.app
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Crawler
