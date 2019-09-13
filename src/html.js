import React from 'react'
import { Helmet } from 'react-helmet'

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
            href={require('../static/img/apple-touch-icon.png')}
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href={require('../static/img/favicon.ico')}
            rel="icon"
            type="image/x-icon"
          />
          <meta name="twitter:card" value="summary_large_image" />
          <meta name="twitter:site" content="@playpostapp" />
          <meta name="twitter:app:name:iphone" content="Playpost" />
          <meta name="twitter:app:id:iphone" content="1460663960" />
          <meta name="twitter:app:name:ipad" content="Playpost" />
          <meta name="twitter:app:id:ipad" content="1460663960" />
          <meta property="fb:app_id" content="557260604800637" />
          <meta property="og:type" content="website" />
          <meta
            name="apple-itunes-app"
            content="app-id=1460663960, app-argument=playpost://playlist"
          ></meta>
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
