import React from 'react'
import { Link } from 'gatsby'
import Swiper from 'swiper'

class Reviews extends React.Component {
  swiperRef = React.createRef()
  swiper = null

  componentDidMount() {
    this.swiper = new Swiper(this.swiperRef.current, {
      speed: 250,
      // centeredSlides: true,
      navigation: {
        nextEl: '#slider-customers-8-next',
        prevEl: '#slider-customers-8-prev',
      },
      slidesPerView: 'auto',
    })
  }

  handleOnClickShareFeedback = event => {
    event.preventDefault()
    typeof window !== 'undefined' && window.drift.api.openChat()
  }

  render() {
    return (
      <section className="reviews py-8" id="reviews">
        <div className="container">
          <div className="row justify-content-center text-center mb-3">
            <div className="col-12 col-md-8">
              <h3 className="text-black-50">Not convinced yet?</h3>
              <h2 className="display-4">Our users love it!</h2>
              <a
                className="action-link"
                href=""
                onClick={this.handleOnClickShareFeedback}
              >
                <span>Share your feedback</span>
              </a>
            </div>
          </div>
        </div>

        <div className="swiper swiper-overflow">
          <div className="container">
            <div className="swiper-container row" ref={this.swiperRef}>
              <div className="swiper-wrapper">
                <div className="swiper-slide col-12 col-md-5 col-lg-3 py-5">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <p className="mb-4">
                        "The voices are human like so you feel like you listen
                        to the news. Now I won't waste my time reading articles;
                        otherwise I listen to them while driving. Brilliant! I
                        would strongly recommend it."
                      </p>
                      <div className="media align-items-center">
                        <div className="media-body">
                          <p className="mb-0">
                            <span className="font-weight-semibold">NabilNabo</span>
                          </p>
                          <p className="small mb-0 text-black-50">
                            Apple App Store review
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide col-12 col-md-5 col-lg-3 py-5">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <p className="mb-4">
                        "Such a clever idea and nice app, I love it!"
                      </p>
                      <div className="media align-items-center">
                        <div className="media-body">
                          <p className="mb-0">
                            <span className="font-weight-semibold">Sammy1133</span>
                          </p>
                          <p className="small mb-0 text-black-50">
                            Apple App Store review
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide col-12 col-md-5 col-lg-3 py-5">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <p className="mb-4">
                        "Gamechanger! Listening to an article is a very simple
                        and a smooth process. I've only used text to speech
                        translations a long time ago and it sounded too much
                        like a robot, but this definitely exceeded my
                        expectations!"
                      </p>
                      <div className="media align-items-center">
                        <div className="media-body">
                          <p className="mb-0">
                            <span className="font-weight-semibold">thienngn</span>
                          </p>
                          <p className="small mb-0 text-black-50">
                            Apple App Store review
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide col-12 col-md-5 col-lg-3 py-5">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <p className="mb-4">
                        "Reading any text article as a podcast through an easy
                        to use app 👌"
                      </p>
                      <div className="media align-items-center">
                        <div className="media-body">
                          <p className="mb-0">
                            <span className="font-weight-semibold">Gersom</span>
                          </p>
                          <p className="small mb-0 text-black-50">
                            Apple App Store review
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Reviews
