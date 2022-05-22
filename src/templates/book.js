import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from '../components/Layout'


export default function BookTemplate({ data }) {
    const books = data.allContentfulBook.nodes
    return (
        <Layout>
          {books.map(book => {
              const coverImage = getImage(book.coverImage)
              const authorImage = getImage(book.author.image)
              return(
                  <div key={book.slug} className="mb-3">
                    <div className="d-flex" style={{gap: "4em"}}>
                      <div style={{width: "25%"}}>
                        <GatsbyImage image={coverImage}/>
                        {book.details ? <section className="book-description"><MDXProvider><MDXRenderer>{book.details.childMdx.body}</MDXRenderer></MDXProvider></section> : ''}
                      </div>
                      <div style={{width: "75%"}}>
                        <div style={{marginBottom: "5em"}}>
                          <Link to={`../../autoren/${book.author.slug}`}>
                            <GatsbyImage image={authorImage}/>
                          </Link>
                          <p style={{fontWeight: "bold"}}>{book.author.name}</p>
                          <p>{book.author.beruf}</p>
                        </div>
                        <div>
                          <h1 className="mb-3">{book.title}</h1>
                          <h2 className="mb-5">{book.subtitle}</h2>
                          <MDXProvider>
                            <MDXRenderer>
                              {book.description.childMdx.body}
                            </MDXRenderer>
                          </MDXProvider>
                        </div>
                      </div>
                    </div>
                  </div>
              )})}
        </Layout>
    )
}


export const query = graphql`
query($slug: String!) {
  allContentfulBook(filter: { slug: { eq: $slug } }) {
    nodes {
      title
      subtitle
      details{
        childMdx {
          body
        }
      }
      description {
        childMdx {
          body
        }
      }
      author {
        name
        slug
        beruf
        image {
          gatsbyImageData(width: 150, placeholder: BLURRED)
        }
      }
      coverImage {
        gatsbyImageData(width: 230, placeholder: BLURRED)
      }
    }
  }
}
`
