import React from 'react'
import { Link } from 'gatsby'

import { APPLE_APP_STORE_URL } from '../../constants/urls'

import Modal from 'components/Modal'

class Pricing extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <div
        className="row justify-content-around flex-md-nowrap text-center py-md-5"
        id="pricing"
      >
        <div className="col-12 col-md-6">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-6">
              <div className="py-5 py-md-0">
                <h3>Standard</h3>
                <div className="price-medium mb-3">
                  €0<span className="price-unit ml-1">/ mo</span>
                </div>
                <ul className="list-unstyled mb-4">
                  <li>Basic quality voices</li>
                  <li>One voice per language</li>
                  <li>Max. 5 minutes per article</li>
                  <li>Some advertisements</li>
                </ul>
                <a
                  className="btn btn-primary btn-lg font-weight-semibold"
                  href={APPLE_APP_STORE_URL}
                >
                  Get started for free
                </a>
              </div>
              <div className="border-bottom d-md-none"></div>
            </div>
          </div>
        </div>
        <div className="border-right d-none d-md-block"></div>
        <div className="col-12 col-md-6 justify-content-around">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-6">
              <div className="py-5 py-md-0">
                <h3>Premium</h3>
                <div className="price-medium mb-3">
                  €4,99<span className="price-unit ml-1">/ mo</span>
                </div>
                <ul className="list-unstyled mb-4">
                  <li>50+ High Quality voices</li>
                  <li>Multiple voices per language</li>
                  <li>Max. 15 minutes per article</li>
                  <li>No advertisements</li>
                </ul>
                <a
                  className="btn btn-primary btn-lg font-weight-semibold"
                  href={APPLE_APP_STORE_URL}
                >
                  Get started for free
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="border-right d-none d-md-block"></div>
        <div className="col-12 col-md-4 justify-content-around">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-9">
              <div className="py-5 py-md-0">
                <h3>Unlimited</h3>
                <div className="price-medium mb-3">
                  €9,99<span className="price-unit ml-1">/ mo</span>
                </div>
                <p className="mb-4 text-left">
                  <ul>
                    <li>All Premium features</li>
                    <li>Unlimited minutes per article *</li>
                  </ul>
                </p>
                <button className="btn btn-secondary btn-lg font-weight-semibold" disabled>
                  Available later
                </button>

                <small className="small text-black-50 d-block mt-2">* within our Fair Use Policy</small>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default Pricing
