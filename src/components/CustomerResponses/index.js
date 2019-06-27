import React from 'react'
import { Link } from 'gatsby'
import Swiper from 'swiper'

class CustomerResponses extends React.Component {
  swiperRef = React.createRef()
  swiper = null

  componentDidMount() {
    this.swiper = new Swiper(this.swiperRef.current, {
      speed: 400,
      navigation: {
        nextEl: '#slider-customers-8-next',
        prevEl: '#slider-customers-8-prev',
      },
      slidesPerView: 'auto',
    })
  }

  render() {
    const { location, title } = this.props

    return (
      <div>
        <div className="pt-5">
          <div className="row justify-content-center text-center py-3">
            <div className="col-12 col-md-8">
              <h4 className="text-black-50">Tagline</h4>
              <h1 className="display-4">Our customers love it</h1>
              <Link className="action-link" to="/contact">
                <span>Share your feedback</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="swiper swiper-overflow">
          <div className="container">
            <div className="swiper-container row" ref={this.swiperRef}>
              <div className="swiper-wrapper">
                <div className="swiper-slide col-11 col-md-5 col-lg-4 py-5">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <p className="mb-4">
                        “All base UI elements are made using Nested Symbols and
                        shared styles that are logically connected. Gorgeous,
                        high-quality video sharing on desktop, mobile, tablet.
                        All base UI elements are made using Nested Symbols”
                      </p>
                      <img
                        className="rounded mb-2"
                        src="<%= require('./assets/pictures/userpic.png') %>"
                        width="60"
                        height="60"
                      />
                      <div className="d-flex justify-content-between align-items-end">
                        <div>
                          <p className="mb-0">
                            <span className="weight-500">Name Surname</span>
                          </p>
                          <p className="small mb-0">Founder, Acme Company</p>
                        </div>
                        <div>
                          <a className="transparent-invert-link ml-2" href="">
                            {/* <%= require('./assets/glyphs/facebook.svg') %> */}
                          </a>
                          <a className="transparent-invert-link ml-2" href="">
                            {/* <%= require('./assets/glyphs/twitter.svg') %> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide col-11 col-md-5 col-lg-4 py-5">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <p className="mb-4">
                        “All base UI elements are made using Nested Symbols and
                        shared styles that are logically connected. Gorgeous,
                        high-quality video sharing on desktop, mobile, tablet.
                        All base UI elements are made using Nested Symbols”
                      </p>
                      <img
                        className="rounded mb-2"
                        src="<%= require('./assets/pictures/userpic.png') %>"
                        width="60"
                        height="60"
                      />
                      <div className="d-flex justify-content-between align-items-end">
                        <div>
                          <p className="mb-0">
                            <span className="weight-500">Name Surname</span>
                          </p>
                          <p className="small mb-0">Founder, Acme Company</p>
                        </div>
                        <div>
                          <a className="transparent-invert-link ml-2" href="">
                            {/* <%= require('./assets/glyphs/facebook.svg') %> */}
                          </a>
                          <a className="transparent-invert-link ml-2" href="">
                            {/* <%= require('./assets/glyphs/twitter.svg') %> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide col-11 col-md-5 col-lg-4 py-5">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <p className="mb-4">
                        “All base UI elements are made using Nested Symbols and
                        shared styles that are logically connected. Gorgeous,
                        high-quality video sharing on desktop, mobile, tablet.
                        All base UI elements are made using Nested Symbols”
                      </p>
                      <img
                        className="rounded mb-2"
                        src="<%= require('./assets/pictures/userpic.png') %>"
                        width="60"
                        height="60"
                      />
                      <div className="d-flex justify-content-between align-items-end">
                        <div>
                          <p className="mb-0">
                            <span className="weight-500">Name Surname</span>
                          </p>
                          <p className="small mb-0">Founder, Acme Company</p>
                        </div>
                        <div>
                          <a className="transparent-invert-link ml-2" href="">
                            {/* <%= require('./assets/glyphs/facebook.svg') %> */}
                          </a>
                          <a className="transparent-invert-link ml-2" href="">
                            {/* <%= require('./assets/glyphs/twitter.svg') %> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CustomerResponses
