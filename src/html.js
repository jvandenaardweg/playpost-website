import React from 'react'

export default class HTML extends React.Component {
  render() {
    const description =
      'Turn every article on the web into audio using industry-leading high-quality voices. So you can listen to it just like Podcasts and Audiobooks.'

    const title = 'Playpost - Instant podcasts of every article'
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
          <meta name="description" content={description} />
          <meta name="twitter:app:name:iphone" content="Playpost" />
          <meta name="twitter:app:id:iphone" content="1460663960" />
          {/* <meta name="twitter:app:url:iphone" content="playpost://" /> */}
          <meta name="twitter:app:name:ipad" content="Playpost" />
          <meta name="twitter:app:id:ipad" content="1460663960" />
          {/* <meta name="twitter:app:url:ipad" content="playpost://" /> */}
          {/* <meta name="twitter:app:name:googleplay" content="Cannonball"> */}
          {/* <meta name="twitter:app:id:googleplay" content="io.fabric.samples.cannonball"> */}
          {/* <meta name="twitter:app:url:googleplay" content="http://cannonball.fabric.io/poem/5149e249222f9e600a7540ef"> */}

          <meta property="og:title" content={title} />
          <meta property="og:url" content="https://playpost.app/" />
          <meta
            property="og:image"
            content={require('../static/img/ogimage.png')}
          />
          <meta property="og:description" content={description} />
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
