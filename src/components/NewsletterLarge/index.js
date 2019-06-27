import React from 'react'
import { Link } from 'gatsby'

class NewsletterLarge extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <div className="py-5" id="newsletter">
        <div className="row justify-content-center text-center pt-3">
          <div className="col-12 col-md-8">
            <h4 className="text-black-50">About our Android App</h4>
            <h1 className="display-4 mb-4">
              Subscribe for Android release date
            </h1>
            <p className="mb-4">
              Signup for our newsletter for future updates. Be the first
              to know about our Android App's release date. Or when we support
              new languages and add new voices.
            </p>
          </div>
        </div>
        <div className="row justify-content-center text-center pb-3">
          <div className="col-12 col-md-8 col-lg-5">
            <form className="input-group mb-3">
              <input
                className="form-control form-control-lg"
                placeholder="Placeholder"
              />
              <div className="input-group-append">
                <button className="btn btn-primary btn-lg btn-block">
                  Action
                </button>
              </div>
            </form>
            <p className="small mb-0 text-black-50">
              By clicking the Button you confirming that you’re agree with our
              following{' '}
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
