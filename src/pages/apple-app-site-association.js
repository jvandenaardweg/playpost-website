import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

class AppleAppSiteAssociation extends React.Component {
  render() {
    const { location, title } = this.props

    const data = {
      webcredentials: {
        apps: ['8GH8GLAMTU.com.aardwegmedia.playpost'],
      },
      applinks: {
        apps: [],
        details: [
          {
            appID: '8GH8GLAMTU.com.aardwegmedia.playpost',
            paths: [
              '*',
              '/login/*',
              '/signup/*',
              '/playlist/*',
              '/archive/*',
              '/favorites/*',
              '/settings/*',
              '/upgrade/*',
            ],
          },
        ],
      },
    }

    return null
  }
}

export default AppleAppSiteAssociation
