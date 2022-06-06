import React, { useState, useEffect }  from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from '../components/Layout'

import "../styles/autor.css"


const WeitereBuecher = ({titel, beschreibung}) => {
    return(
        <div id="weiterebuecher">
          <h5 className="mb-3"><b>Weitere Bücher von Gernot Maria Grohs:</b></h5>
          <h6>„Die Erlösung des H.“ - eine Erzählung</h6>
          <p>1. Auflage 10.März 2020</p>
          <p>Manuela Kinzel Verlag, ISBN 978-3-95544-137-1, 142 Seiten</p>
          <br/>
          <h6>„Wanderers Gedanken“ - Lyrik, Texte und Ansichten</h6>
          <p>1. Auflage September 2019</p>
          <p>2. Auflage November 2019</p>
          <p>Manuela Kinzel Verlag, ISBN 978-3-95544-131-9, 140 Seiten</p>
          <br/>
          <h6>„Die merkwürdigen Abenteuer des kleinen Fis“</h6>
          <p>Ein Buch für kleine und große Erwachsene, Pro BUSINESS Verlag Berlin</p>
          <p>ISBN 978-3-939533-96-2, 1. Auflage Dez. 2007,</p>
          <p>151 Seiten mit 10 Zeichnungen von Julia M. Grohs– 6 Jahre</p>
          <br/>
          <h6>„Bildung ist ein großes Vergnügen“</h6>
          <p>Manuela Kinzel Verlag, 1. Auflage 2004, ISBN 3-934071-55-4, 220 Seiten</p>
          <br/>
          <h6>„Gottfried Kirchhoff 1685-1746 – ein Mühlbecker kreuzt die Wege von Johann Sebastian Bach und Georg Friedrich Händel“</h6>
          <p>Manuela Kinzel Verlag, ISBN 3-934071-57-0, 60 Seiten,</p>
          <p>zahlreiche Abbildungen und Notenbeispiele als Erstveröffentlichung,</p>
          <p>1.Auflage Sep. 2004, 2. Auflage Okt. 2006</p>
          <br/>
          <h6>„Georg Trexler – Wurzeln, Wirken, Werke, Vermächtnis“</h6>
          <p>Kamprad-Verlag Altenburg, 1. Auflage 2003, ISBN 3-930550-24-5,</p>
          <p>264 Seiten, zahlreiche Abbildungen und Notenbeispiele</p>
        </div>
    )
}


export default function AuthorTemplate (props) {
    const authors = props.data.allContentfulAuthor.nodes

    return (
        <Layout>
          {authors.map(author => {
              const image = getImage(author.image)

              return(
                  <div key={author.slug}>
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
                            {author.auszeichnungen ? <div><h5 className="mb-3"><b>Auszeichnungen:</b></h5><div>{author.auszeichnungen.map(auszeichnung => (<div className="mb-2 d-flex"><h5 style={{marginRight: "2%"}}><b>{auszeichnung.jahr}</b></h5><h5>{auszeichnung.titel}</h5>{auszeichnung.image ? <img className="mb-3 mt-3" style={{width: "230px"}}src={auszeichnung.image.url}/> : ''}</div>))}</div></div> : ''}
                          </div>

                          {author.youtubeKanal ? <div className="mb-5"><h5 className="mb-3"><b>Youtube Kanal von Gernot Maria Grohs:</b></h5><a href={author.youtubeKanal.link}><img src={author.youtubeKanal.image.url}/></a></div> : ''}



                          <div className="mt-5 mb-5">
                            <h5 style={{fontWeight: "bold"}} className="mb-3">Im Rosenfeld Verlag erschienen:</h5>
                            <div>
                              {author.book.map(b => {
                                  const cover = getImage(b.coverImage)
                                  return(
                                      <div key={b.slug}>
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

                                            {b.haendlerLink? <div className="mt-3"><p className="mb-3">hier bestellen: </p><div className="d-flex">{b.haendlerLink.map(h => (<div style={{marginRight: "10%", gap: "10%"}}><a href={h.link}><img style={{maxWidth: "120px"}}src={h.haendler.logo.url}/></a></div>))}</div></div> : ''}

                                          </div>
                                        </div>
                                      </div>
                                  )
                              }
                                              )}
                            </div>
                          </div>

                          <br/>
                          <br/>
                            {author.name == "Gernot Maria Grohs" ? <WeitereBuecher/> : <h1>nein</h1>}

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
      slug
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
        image {
          url
        }
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
 weitereBuecher {
        beschreibung {
          childMdx {
            body
          }
        }
        titel
      }
      }
    }
  }
`
