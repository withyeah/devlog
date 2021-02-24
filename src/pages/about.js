import React from 'react'
import { graphql } from 'gatsby'

import { rhythm } from '../utils/typography'
import * as Lang from '../constants'

import '../styles/resume.scss'

<head>

  <meta property="og:title" content="Yerang Kim" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://yerang.kim/about" />
  <meta property="og:description" content="about yerang.kim" />
  <meta property="og:image" content="https://user-images.githubusercontent.com/45819975/108961652-ff0d7a00-76ba-11eb-8c36-6297eacda1a6.PNG" />


</head>

export default ({ data }) => {
  const resumes = data.allMarkdownRemark.edges

  const resume = resumes
    .filter(({ node }) => node.frontmatter.lang === Lang.ENGLISH)
    .map(({ node }) => node)[0]

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(0.5)} ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(
          3 / 4
        )}`,
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: resume.html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            lang
          }
        }
      }
    }
  }
`
