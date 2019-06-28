import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'

class NotFound extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <Layout location={location} hideFooter>
        <CenterHeader
          title="Oh oh... Not found"
          description="Seems like the page is not here (anymore)."
        />
      </Layout>
    )
  }
}

export default NotFound
