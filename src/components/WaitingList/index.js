import React from 'react'
import { Link } from 'gatsby'

class WaitingList extends React.Component {
  render() {
    return (
      <div className="py-5" id="waiting-list">
        <div className="container">
          <div className="row justify-content-center text-center pt-3">
            <div className="col-12 col-md-8">
              <h3 className="text-black-50 h3">Be the first to try it out</h3>
              <h2 className="display-4 mb-4">Signup for early access</h2>
              <p className="mb-4">
                Playpost for Publishers is a service under development. Join our
                early access list and you'll be one of the first to try it out
                when we launch.
              </p>
            </div>
          </div>
          <div className="row justify-content-center text-center pb-3">
            <div className="col-12 col-md-8 col-lg-5">
              <form
                className="input-group mb-3"
                action="https://aardwegmedia.us2.list-manage.com/subscribe/post?u=24cd841bc54c2cceb6801291c&amp;id=714d3d1c6d"
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
                <div className="mc-field-group d-none">
                  <select
                    name="group[23497]"
                    className="REQ_CSS"
                    id="mce-group[23497]"
                  >
                    <option value=""></option>
                    <option value="1" selected>
                      Playpost for Publishers
                    </option>
                  </select>
                </div>
                <div className="input-group-append">
                  <button
                    className="btn btn-primary btn-lg font-weight-semibold"
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  >
                    Signup
                  </button>
                </div>
              </form>
              <p className="small mb-0 text-black-50">
                By joining the early access list you confirm that you agree with
                our{' '}
                <Link className="text-black-50 weight-500" to="/privacy">
                  <span>Privacy Policy</span>
                </Link>{' '}
                and{' '}
                <Link className="text-black-50 weight-500" to="/terms">
                  <span>Terms &amp; Conditions</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WaitingList
