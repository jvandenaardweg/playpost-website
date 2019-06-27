import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

import Layout from 'components/Layout'

class About extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <Layout location={location}>
        <div>about</div>
      </Layout>
    )
  }
}

export default About
