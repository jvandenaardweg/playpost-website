import React from 'react'
import { Link } from 'gatsby'

class Intro extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <div className="py-5">
        <div className="row justify-content-center text-center py-5">
          <div className="col-12 col-md-10">
            <h4 className="text-black-50">Hands in the air</h4>
            <h2 className="display-4">
              Listen to articles while driving, cycling, jogging, walking…
            </h2>
            <p className="lead mb-4">
              We have noticed the web is full of interesting long read articles
              that go in depth on a certain subject. If your interest in these
              articles is high, then you probably wished you had more time to
              read during the day. Reality is; we also do other things than
              sitting and reading. We commute. We drive. We walk. We cycle. We
              do our everyday chores.
            </p>
            <div className="large">
              <span className="mx-2">
                <a className="weight-500 action-link" href="">
                  <span>First action</span>
                </a>
              </span>
              <span className="mx-2">
                <a className="weight-500 action-link" href="">
                  <span>Second action</span>
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
