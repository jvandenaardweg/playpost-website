import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'

class About extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <Layout location={location}>
        <CenterHeader
          title="Hi, how can we help?"
          description="We understand some things might be confusing."
        />
        <div className="container">about</div>
      </Layout>
    )
  }
}

export default About
