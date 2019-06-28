import React from 'react'
import { Link } from 'gatsby'
import { scrollIt } from '../../utils/scroll'

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
            <h4 className="text-black-50">Let's show you how to...</h4>
            <h2 className="display-4">
              Listen to articles while driving, cycling, jogging, walking…
            </h2>
            <p className="lead mb-4">
              The internet is full of interesting <em>long read</em> articles,
              but you don't always have the time to sit down and read them.
              Reality is: We commute. We drive. We walk. We cycle. We workout.
              We do our everyday chores. What if you could just listen to
              articles?
            </p>
            <div className="large">
              <span className="mx-2">
                <a
                  className="weight-500 action-link"
                  href=""
                  onClick={this.handleOnClick}
                >
                  <span>Show me how</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro
