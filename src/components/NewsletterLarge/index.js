import React from 'react'
import { Link } from 'gatsby'

class NewsletterLarge extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <div className="py-5" id="newsletter">
        <div className="row justify-content-center text-center pt-3">
          <div className="col-12 col-md-8">
            <h4 className="text-black-50">New features and releases</h4>
            <h1 className="display-4 mb-4">
              Subscribe for Android App release date
            </h1>
            <p className="mb-4">
              Join our newsletter to stay up to date on features and releases.{' '}
              Be the first to know about our Android App's release date. Or when we support new languages and add new voices.
            </p>
          </div>
        </div>
        <div className="row justify-content-center text-center pb-3">
          <div className="col-12 col-md-8 col-lg-5">
            <form
              className="input-group mb-3"
              action="https://aardwegmedia.us2.list-manage.com/subscribe/post?u=24cd841bc54c2cceb6801291c&amp;id=d2914f7072"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate=""
            >
              <input
                className="form-control form-control-lg"
                placeholder="Placeholder"
                name="EMAIL"
                type="email"
                id="mce-EMAIL"
                aria-describedby="emailHelp"
                placeholder="Your email address"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary btn-block font-weight-semibold"
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="small mb-0 text-black-50">
              By subscribing you confirm that you agree with our
              <br />
              <Link className="text-dark weight-500" to="/terms">
                <span>Terms and Conditions</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsletterLarge
