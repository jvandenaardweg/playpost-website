import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'
import ContactForm from 'components/ContactForm'

class Contact extends React.Component {
  openChat = event => {
    event.preventDefault()
    $crisp.push(['do', 'chat:open'])
  }

  render() {
    const { location, title } = this.props

    return (
      <Layout location={location}>
        <CenterHeader
          title="Hi, how can we help?"
          description="Questions, bug reports, feedback, feature requests — we're here for it all. "
        />
        <div className="container">
          <div className="d-flex justify-content-center mt-4 mb-1">
            <div className="px-1">
              <button
                className="btn btn-lg btn-primary font-weight-bold"
                type="button"
                onClick={this.openChat}
              >
                Start live chat
              </button>
            </div>
          </div>
          {/* <h2 className="text-center text-black-50 font-weight-light py-5">or</h2>
          <h2 className="text-center mt-0">Send an old-fashioned message</h2>
          <ContactForm /> */}
        </div>
      </Layout>
    )
  }
}

export default Contact
