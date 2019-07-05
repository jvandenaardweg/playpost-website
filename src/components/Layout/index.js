import React from 'react'
import emergence from 'emergence.js'
import Drift from 'react-driftjs'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import CookieConsent from 'components/CookieConsent'
import { siteMetadata } from '../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import DriftWidget from 'components/DriftWidget'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()

    // typeof window !== 'undefined' &&
    //   window.drift.on('ready', (api, payload) => {
    //     api.hideWelcomeMessage()
    //     // api.hideWelcomeMessage()
    //   })
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children, hideFooter } = this.props
    return (
      <div>
        <DriftWidget />
        <Navbar title={siteMetadata.title} {...this.props} />
        {children}
        {!hideFooter && (
          <Footer title={siteMetadata.title} author={siteMetadata.author} />
        )}
        <CookieConsent />
      </div>
    )
  }
}

export default Layout
