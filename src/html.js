import React from 'react'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link
            href="/img/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
          <meta
            name="twitter:card"
            value="Playpost - Instant podcasts of every article"
          />
          <meta
            name="description"
            content="Turn every article on the web into audio using industry leading high quality voices. So you can listen to it just like Podcasts and Audiobooks."
          />
          <meta
            property="og:title"
            content="Playpost - Instant podcasts of every article"
          />
          <meta property="og:url" content="https://playpost.app/" />
          <meta
            property="og:image"
            content="https://playpost.app//ogimage.2f7d56f7c8d49bba757b.png"
          />
          <meta
            property="og:description"
            content="Turn every article on the web into audio using industry leading high quality voices. So you can listen to it just like Podcasts and Audiobooks."
          />
          <meta property="fb:app_id" content="557260604800637" />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://www.google.com" />
          <link rel="preconnect" href="https://marketingplatform.google.com" />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
        <noscript>This page needs Javascript enabled.</noscript>
      </html>
    )
  }
}
