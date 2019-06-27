import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Layout from 'components/Layout'
import Cover from 'components/Cover'
import Intro from 'components/Intro'
import Voices from 'components/Voices'
import Features from 'components/Features'
import FeatureShare from 'components/FeatureShare'
import Pricing from 'components/Pricing'
import CustomerResponses from 'components/CustomerResponses'
import NewsletterLarge from 'components/NewsletterLarge'

const Index = ({ data, location }) => {
  // const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Cover />
      <div className="container" id="features">
        <Intro />
        <Voices />
        <Features />
        <FeatureShare />
        <Pricing />
        <CustomerResponses />
        <NewsletterLarge />
      </div>
    </Layout>
  )
}

export default Index

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       meta: siteMetadata {
//         title
//         description
//         url: siteUrl
//         author
//         twitter
//       }
//     }
//     remark: allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       posts: edges {
//         post: node {
//           html
//           frontmatter {
//             layout
//             title
//             path
//             category
//             tags
//             description
//             date(formatString: "YYYY/MM/DD")
//             image {
//               childImageSharp {
//                 fixed(width: 500) {
//                   ...GatsbyImageSharpFixed_withWebp
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
