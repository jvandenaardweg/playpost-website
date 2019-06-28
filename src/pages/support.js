import React from 'react'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'

class Support extends React.Component {
  componentDidMount() {
    typeof window !== 'undefined' && window.drift && window.drift.api.openChat()
  }

  openChat = event => {
    event.preventDefault()
    typeof window !== 'undefined' && window.drift && window.drift.api.openChat()
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
        </div>
      </Layout>
    )
  }
}

export default Support
