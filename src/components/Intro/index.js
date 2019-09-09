import React from 'react'
import { Link } from 'gatsby'
import { scrollIt } from '../../utils/scroll'
import { APPLE_APP_STORE_URL } from '../../constants/urls'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class Intro extends React.Component {
  handleOnClick = event => {
    event.preventDefault()
    scrollIt(document.getElementById('voices'))
  }

  render() {
    const { location, title } = this.props

    return (
      <div className="py-5">
        <div className="row justify-content-center text-center py-5">
          <div className="col-12 col-md-10">
            <h4 className="text-black-50 h3">Bookmarking the new way</h4>
            <h2 className="display-4">Your playlist of articles</h2>
            <p className="lead">
              The internet is full of interesting <em>long read</em> articles,
              but you don't always have the time to sit down and read them.
              Reality is: We commute. We drive. We walk. We cycle. We workout.
              We do our everyday chores.
            </p>
            <p className="lead mb-4">
              What if you could just listen to articles?
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro
