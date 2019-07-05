import React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import './style.scss'
import { APPLE_APP_STORE_URL } from '../../constants/urls'

class Modal extends React.Component {
  modalRef = React.createRef()

  componentDidMount() {
    document.addEventListener('click', this.handleClickEvent)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickEvent)
  }

  handleClickEvent = event => {
    if (
      this.modalRef &&
      this.modalRef.current &&
      !this.modalRef.current.contains(event.target)
    ) {
      this.props.onClose()
    }
  }

  render() {
    const { location, title, onClose } = this.props

    return (
      <div className="modal-dialog" role="document" ref={this.modalRef}>
        <div className="modal-content">
          <div className="close" onClick={() => onClose()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                fillRule="evenodd"
                d="M12 10.609L18.609 4 20 5.391 13.391 12 20 18.609 18.609 20 12 13.391 5.391 20 4 18.609 10.609 12 4 5.391 5.391 4z"
              />
            </svg>
          </div>
          <div className="modal-body text-center">
            <h2>Available in the Apple App Store</h2>
            <p className="mb-2">
              Our app is available in the Apple App Store to download for free!
              Download the app and automatically enjoy the free features.
              Premium and Plus subscriptions can be bought within the App.
            </p>

            <div className="d-flex justify-content-center">
              <div className="px-1">
                <OutboundLink
                  className="btn btn-primary btn-lg font-weight-semibold"
                  href={APPLE_APP_STORE_URL}
                >
                  Get iPhone App
                </OutboundLink>
              </div>
              {/* <div className="px-1">
                <a className="btn btn-outline-primary" href="">
                  Close
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
