import React from 'react'
import { Link } from 'gatsby'

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
            <div className="col-12 col-lg-8">
              <div className="py-5 py-md-0">
                <h3>Standard</h3>
                <div className="price-medium mb-3">
                  €0<span className="price-unit ml-1">/ mo</span>
                </div>
                <p className="mb-4">
                  Basic quality voices. One voice option per language. Max. 5
                  minutes per article. Some advertisements.
                </p>
                <button className="btn btn-primary btn-lg font-weight-semibold">
                  Get started for free
                </button>
              </div>
              <div className="border-bottom d-md-none"></div>
            </div>
          </div>
        </div>
        <div className="border-right d-none d-md-block"></div>
        <div className="col-12 col-md-6 justify-content-around">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-8">
              <div className="py-5 py-md-0">
                <h3>Premium</h3>
                <div className="price-medium mb-3">
                  €4,99<span className="price-unit ml-1">/ mo</span>
                </div>
                <p className="mb-4">
                  50+ Higher Quality voices. Multiple voice options per
                  language. No article limits. No advertisements.
                </p>
                <button className="btn btn-primary btn-lg font-weight-semibold">
                  Get started for free
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="border-right d-none d-md-block"></div>
        <div className="col-12 col-md-6 justify-content-around">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-8">
              <div className="py-5 py-md-0">
                <h3>Unlimited</h3>
                <div className="price-medium mb-3">
                  €9,99<span className="price-unit ml-1">/ mo</span>
                </div>
                <p className="mb-4">
                  Everything from Premium. Unlimited listening, no article limits. Download complete playlist offline.
                </p>
                <button className="btn btn-primary btn-lg font-weight-semibold">
                  Get started for free
                </button>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    )
  }
}

export default Pricing
