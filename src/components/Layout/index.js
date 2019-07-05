import React from 'react'
import emergence from 'emergence.js'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'
import Drift from 'react-driftjs'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { siteMetadata } from '../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()

    typeof window !== 'undefined' &&
      window.drift.on('ready', (api, payload) => {
        api.hideWelcomeMessage()
        // api.hideWelcomeMessage()
      })
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children, hideFooter } = this.props
    return (
      <div>
        <Drift appId="hrvni23275hv" c />
        <Navbar title={siteMetadata.title} {...this.props} />
        {children}
        {!hideFooter && (
          <Footer title={siteMetadata.title} author={siteMetadata.author} />
        )}
        <CookieConsent
          location="bottom"
          buttonText="OK"
          cookieName="playpostConsent"
          style={{
            background: '#fff',
            color: '#000',
            border: '1px #ddd solid',
            width: '350px',
            marginLeft: '20px',
            marginBottom: '20px',
            zIndex: '999999999',
            right: '20px',
            left: 'auto',
            padding: 0,
          }}
          buttonStyle={{
            color: '#4e503b',
            fontSize: '13px',
            position: 'absolute',
            top: '-14px',
            right: '-14px',
            width: '40px',
            height: '40px',
            fontWeight: 'bold',
          }}
          contentStyle={{ padding: '24px', margin: 0 }}
          expires={365}
        >
          <p>
            Playpost uses cookies to allow us to better understand how the site
            is used. By continuing to use this site, you consent to this policy.
          </p>
          <Link to="/privacy">Click to learn more.</Link>
        </CookieConsent>
      </div>
    )
  }
}

export default Layout
