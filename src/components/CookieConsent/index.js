import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'
import './style.scss'

const CookieConsentComponent = () => (
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
      zIndex: '999999999999',
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
      Playpost uses cookies to allow us to better understand how the site is
      used. By continuing to use this site, you consent to this policy.
    </p>
    <Link to="/privacy">Click to learn more.</Link>
  </CookieConsent>
)

export default CookieConsentComponent
