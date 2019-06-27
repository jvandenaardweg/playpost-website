import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

class ResetPassword extends React.Component {
  render() {
    const { location, title } = this.props

    let resetPasswordToken = ''

    const windowLocationPathNames = window.location.pathname.split('/')

    if (windowLocationPathNames.length) {
      resetPasswordToken =
        windowLocationPathNames[windowLocationPathNames.length - 1]
    }

    return (
      <div>
        <h1 className="display-1">Reset your password</h1>
        <p>
          Use this reset password code in the Playpost app:
          <br />
          <br />
          <strong id="reset-password-token" className="display-1">
            {resetPasswordToken}
          </strong>
        </p>
        <a
          href={`playpost://login/reset-password/${resetPasswordToken}`}
          className="btn btn-primary btn-lg mt-4"
          id="reset-password-token-button"
        >
          Reset password in App
        </a>
      </div>
    )
  }
}

export default ResetPassword
