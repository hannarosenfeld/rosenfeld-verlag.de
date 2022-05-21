import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from '../components/Layout'


export default function BookTemplate({ data }) {
    const authoren = data.allContentfulAuthor.nodes
    console.log(data.allContentfulAuthor.nodes)
    return (
        <Layout>
          {authoren.map(author => {
              const image = getImage(author.image)
              return(
                  <div>
                    <div className="d-flex">
                      <div style={{width: "30%"}}>
                        <GatsbyImage image={image} className="mb-1"/>
                        <p style={{fontSize: "0.8em"}}>{author.fotoCredit}</p>
                      </div>
                      <div key={author.slug} className="mb-3" style={{width: "70%"}}>
                        <h1 className="mb-4" style={{fontWeight: "bold"}}>{author.name}</h1>
                        <h2 style={{marginBottom: "2em"}} >{author.beruf}</h2>
                        <div style={{width: "85%"}}>
                          <p className="mb-5">
                            <MDXProvider>
                              <MDXRenderer>
                                {author.bio.childMdx.body}
                              </MDXRenderer>
                            </MDXProvider>
                          </p>
                          <div>
                            <p style={{fontWeight: "bold", fontSize: "0.9em"}}>Im Rosenfeld Verlag erschienen:</p>
                            <div>

                            </div>
                            <div>
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
      books {
        title
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
