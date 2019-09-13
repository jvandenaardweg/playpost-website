import React from 'react'
import { scrollIt } from '../../utils/scroll'

class Intro extends React.Component {
  handleOnClick = event => {
    event.preventDefault()
    scrollIt(document.getElementById('voices'))
  }

  render() {
    return (
      <section className="intro py-8" id="intro">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-10">
            <h4 className="text-black-50 h3">Bookmarking the new way</h4>
            <h2 className="display-4">Your playlist of articles</h2>
            <p className="lead">
              The internet is full of interesting <em>long read</em> articles,
              but you don't always have the time to sit down and read them.
              Reality is: We commute. We drive. We walk. We cycle. We workout.
              We do our everyday chores.
            </p>
            <p className="lead mb-0">
              What if you could just listen to articles? With Playpost you can!
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Intro
