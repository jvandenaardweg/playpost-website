import React from 'react'

import Modal from 'components/Modal'

class Pricing extends React.Component {
  state = {
    isActiveModal: false,
  }

  handleOnPressGetStarted = event => {
    event.preventDefault()
    this.setState({ isActiveModal: !this.state.isActiveModal })
  }

  handleOnModalClose = event => {
    this.setState({ isActiveModal: false })
  }

  render() {
    const { location, title } = this.props
    const { isActiveModal } = this.state

    return (
      <div
        className="row justify-content-around flex-md-nowrap text-center py-md-5"
        id="pricing"
      >
        {isActiveModal && <Modal onClose={this.handleOnModalClose} />}
        <div className="col-12 col-md-4">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-9">
              <div className="py-2 py-md-0">
                <h3>Free</h3>
                <div className="price-medium mb-3">
                  €0<span className="price-unit ml-1">/ mo</span>
                </div>
                <ul className="list-unstyled mb-4">
                  <li>Basic quality voices</li>
                  <li>One voice per language</li>
                  <li>Max. 5 minutes per article</li>
                  <li>Max. 30 minutes per month</li>
                  <li>Unlimited playlist items</li>
                  <li>Some advertisements</li>
                </ul>
                <a
                  className="btn btn-primary btn-lg font-weight-semibold"
                  href=""
                  onClick={this.handleOnPressGetStarted}
                >
                  Get started for free
                </a>
                <small className="small text-black-50 d-block mt-2">
                  about 5 articles to audio per month
                </small>
              </div>
              <div className="border-bottom d-md-none"></div>
            </div>
          </div>
        </div>
        <div className="border-right d-none d-md-block"></div>
        <div className="col-12 col-md-4 justify-content-around">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-9">
              <div className="py-2 py-md-0">
                <h3>Premium</h3>
                <div className="price-medium mb-3">
                  €4,99<span className="price-unit ml-1">/ mo</span>
                </div>
                <ul className="list-unstyled mb-4">
                  <li>30+ High Quality voices</li>
                  <li>Multiple voices per language</li>
                  <li>Max. 15 minutes per article</li>
                  <li>Max. 120 minutes per month</li>
                  <li>Unlimited playlist items</li>
                  <li>No advertisements</li>
                </ul>
                <a
                  className="btn btn-primary btn-lg font-weight-semibold"
                  href=""
                  onClick={this.handleOnPressGetStarted}
                >
                  Get started for free
                </a>
                <small className="small text-black-50 d-block mt-2">
                  about 25 articles to audio per month
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="border-right d-none d-md-block"></div>
        <div className="col-12 col-md-4 justify-content-around">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-9">
              <div className="py-2 py-md-0">
                <h3>Plus</h3>
                <div className="price-medium mb-3">
                  €9,99<span className="price-unit ml-1">/ mo</span>
                </div>
                <ul className="list-unstyled mb-4">
                  <li>90+ High Quality voices</li>
                  <li>Multiple voices per language</li>
                  <li>Max. 25 minutes per article</li>
                  <li>Max. 300 minutes per month</li>
                  <li>Unlimited playlist items</li>
                  <li>No advertisements</li>
                </ul>
                <a
                  className="btn btn-primary btn-lg font-weight-semibold"
                  href=""
                  onClick={this.handleOnPressGetStarted}
                >
                  Get started for free
                </a>
                <small className="small text-black-50 d-block mt-2">
                  about 65 articles to audio per month
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pricing
