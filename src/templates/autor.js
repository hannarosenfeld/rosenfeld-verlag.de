import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from '../components/Layout'


export default function BookTemplate({ data }) {
    const authoren = data.allContentfulAuthor.nodes
    return (
        <Layout>
          {authoren.map(author => {
              return(
                  <div key={author.slug} className="mb-3">
                    {author.name}
                  </div>
              )})}
        </Layout>
    )
}


export const query = graphql`
query($slug: String!) {
  allContentfulAuthor(filter: { slug: { eq: $slug } }) {
    nodes {
      name
      }
    }
  }
`
