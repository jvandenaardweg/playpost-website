import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'
import ContactForm from 'components/ContactForm'

class Contact extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <Layout location={location}>
        <CenterHeader title="Contact" description="Here" />
        <ContactForm />
      </Layout>
    )
  }
}

export default Contact
