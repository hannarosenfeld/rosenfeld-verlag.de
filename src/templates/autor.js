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

                          <div className="mb-5">
                            {author.auszeichnungen ? <div><h5 className="mb-3"><b>Auszeichnungen:</b></h5><div>{author.auszeichnungen.map(auszeichnung => (<div className="d-flex"><h5 style={{marginRight: "2%"}}><b>{auszeichnung.jahr}</b></h5><h5>{auszeichnung.titel}</h5></div>))}</div></div> : ''}
                          </div>

                          {author.youtubeKanal ? <div className="mb-5"><h5 className="mb-3"><b>Youtube Kanal von Gernot Maria Grohs:</b></h5><a href={author.youtubeKanal.link}><img src={author.youtubeKanal.image.url}/></a></div> : <h1>hihinein</h1>}


                  <div className="mb-5">
                            <h5 style={{fontWeight: "bold"}} className="mb-3">Im Rosenfeld Verlag erschienen:</h5>
                            <div>
                              {author.book.map(b => {
                                  const cover = getImage(b.coverImage)
                                  return(
                                      <div >
                                        <div
                                          className="d-flex author-books-container"
                                          style={{gap: "5%", marginRight: "5%"}}
                                        >
                                          <div>
                                            <GatsbyImage image={cover} style={{width: "13em"}}/>
                                          </div>
                                          <div>
                                            <h5 style={{fontWeight: "bold"}}>{b.title}</h5>
                                            <p className="mb-2">{b.subtitle}</p>
                                            <p className="mb-3" style={{fontSize: "12px"}}>
                                              <MDXProvider>
                                                <MDXRenderer>
                                                  {b.details.childMdx.body}
                                                </MDXRenderer>
                                              </MDXProvider>
                                            </p>

                                            <Link to={`../../buecher/${b.slug}`} className="link">mehr erfahren</Link>

                                            <div className="mt-3">
                                              <p className="mb-3">hier bestellen: </p>
                                              <div className="d-flex">
                                                {b.haendlerLink.map(h => (
                                                    <div style={{marginRight: "10%", gap: "10%"}}>
                                                      <a href={h.link}><img style={{maxWidth: "120px"}}src={h.haendler.logo.url}/></a>
                                                    </div>
                                                )
                                                                   )}
                                              </div>
                                            </div>

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
      youtubeKanal {
        link
        image {
          gatsbyImageData(width: 500)
          url
        }
      }
auszeichnungen {
        jahr
        titel
      }
      book {
 haendlerLink {
          link
          haendler {
            logo {
              url
            }
          }
        }
        details {
          childMdx {
            body
          }
        }
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
