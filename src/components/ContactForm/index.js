import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

class ContactForm extends React.Component {
  render() {
    const { title, description } = this.props

    return (
      <div className="row justify-content-center text-center py-5">
        <div className="col-12 col-md-6 col-lg-4">
          <form className="mb-3">
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <div className="custom-select custom-select-lg">
                <select placeholder="Group">
                  <option value="1">Topic One</option>
                  <option value="2">Topic Two</option>
                  <option value="3">Topic Three</option>
                  <option value="4">Topic Four</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control form-control-lg"
                placeholder="Feedback"
                rows="4"
              ></textarea>
            </div>
            <button className="btn btn-lg btn-primary btn-block">
              Send your feedback
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm
