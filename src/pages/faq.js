import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

import Layout from 'components/Layout'

class Faq extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <Layout location={location}>
        <div>faq</div>
      </Layout>
    )
  }
}

export default Faq
