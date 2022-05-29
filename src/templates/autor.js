import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from '../components/Layout'

import "../styles/autor.css"

export default function AuthorTemplate({ data }) {
    const authors = data.allContentfulAuthor.nodes
    return (
        <Layout>
          {authors.map(author => {
              const image = getImage(author.image)

              return(
                  <div>
                    <div className="author d-flex" style={{gap: "2em"}}>
                      <div className="author-image" style={{padding: "0 1em", margin: "0 1em"}}>
                        <GatsbyImage image={image} className="mb-1" style={{minWidth: "200px"}}/>
                        <p style={{fontSize: "0.8em"}}>Foto: {author.fotoCredit}</p>
                      </div>
                      <div key={author.slug} className="mb-3" style={{width: "70%"}}>
                        <h1 className="mb-4" style={{fontWeight: "bold"}}>{author.name}</h1>
                        <h2 style={{marginBottom: "2em"}} >{author.beruf}</h2>
                        <div className="author-bio" style={{width: "85%"}}>
                          <p className="mb-5">
                            <MDXProvider>
                              <MDXRenderer>
                                {author.bio.childMdx.body}
                              </MDXRenderer>
                            </MDXProvider>
                          </p>

                          <div>
                            <p style={{fontWeight: "bold", fontSize: "0.9em"}} className="mb-3">Im Rosenfeld Verlag erschienen:</p>
                            <div>
                              {author.book.map( b => {
                                  const cover = getImage(b.coverImage)
                                  return(
                                      <div >
                                        <div className="d-flex author-books-container" style={{gap: "2em", marginRight: "1em"}}>
                                          <GatsbyImage image={cover} style={{minWidth: "8em", maxWidth: "10em"}}/>
                                          <div>
                                            <h4 style={{fontWeight: "bold"}}>{b.title}</h4>
                                            <p>{b.subtitle}</p>
                                            <Link to={`../../buecher/${b.slug}`} className="link">mehr erfahren</Link>
                                          </div>
                                        </div>
                                      </div>
                                  )
                              }
                                              )}
                            </div>
                          </div>
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
  allContentfulAuthor(filter: { slug: { eq: $slug } }) {
    nodes {
      name
      fotoCredit
      beruf
      book {
        title
        slug
        subtitle
        coverImage {
          gatsbyImageData(width: 220)
        }
      }
      bio {
        childMdx {
          body
        }
      }
      image {
        gatsbyImageData(width: 220)
      }
      }
    }
  }
`
