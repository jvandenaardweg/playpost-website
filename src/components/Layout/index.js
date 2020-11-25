import React from 'react'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Notification from 'components/Notification'
import CookieConsent from 'components/CookieConsent'
import { siteMetadata } from '../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import DriftWidget from 'components/DriftWidget'

class Layout extends React.Component {
  render() {
    const { children, hideFooter } = this.props
    return (
      <div>
        <Notification />
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
