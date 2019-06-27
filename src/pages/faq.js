import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'

class Faq extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <Layout location={location}>
        <CenterHeader
          title="Hi, how can we help?"
          description="We understand some things might be confusing."
        />
        <div className="container">faq</div>
      </Layout>
    )
  }
}

export default Faq
