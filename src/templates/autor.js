import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from '../components/Layout'

import "../styles/autor.css"


const GernotAuszeichnungen = () => (
    <>
      <h5 style={{fontWeight: "bold"}}>Auszeichnungen:</h5>
      ﻿<p><b>2010</b> ﻿Kulturpreis der Sudetendeutschen Akademie in der Sparte Musik</p>
      ﻿<p><b>2015</b> ﻿Johann-Wenzel-Stamitz Preis der Künstlergilde Esslingen</p>
    </>
)


const WeitereBuecherVonGross = () => (
    <>
      <h5 className="mb-3" style={{fontWeight: "bold"}}>Weitere Bücher von Gernot Maria Grohs:</h5>
      <div>
        <p style={{fontWeight: "bold"}}>„Die Erlösung des H.“ - eine Erzählung</p>
        <p>1. Auflage 10.März 2020</p>
        <p>Manuela Kinzel Verlag, ISBN 978-3-95544-137-1, 142 Seiten</p>
      </div>
      <br/>
      <div>
        <p style={{fontWeight: "bold"}}>„Wanderers Gedanken“ - Lyrik, Texte und Ansichten</p>
        <p>1. Auflage September 2019</p>
        <p>2. Auflage November 2019</p>
        <p>Manuela Kinzel Verlag, ISBN 978-3-95544-131-9, 140 Seiten</p>
      </div>
      <br/>
      <div>
        <p style={{fontWeight: "bold"}}>„Die merkwürdigen Abenteuer des kleinen Fis“</p>
        <p>Ein Buch für kleine und große Erwachsene, Pro BUSINESS Verlag Berlin</p>
        <p>ISBN 978-3-939533-96-2, 1. Auflage Dez. 2007,</p>
        <p>151 Seiten mit 10 Zeichnungen von Julia M. Grohs– 6 Jahre</p>
      </div>
      <br/>
      <div>
        <p style={{fontWeight: "bold"}}>„Bildung ist ein großes Vergnügen“</p>
        <p>Manuela Kinzel Verlag, 1. Auflage 2004, ISBN 3-934071-55-4, 220 Seiten</p>
      </div>
      <br/>
      <div>
        <p style={{fontWeight: "bold"}}>„Gottfried Kirchhoff 1685-1746 – ein Mühlbecker kreuzt die Wege von Johann Sebastian Bach und Georg Friedrich Händel“</p>
        <p>Manuela Kinzel Verlag, ISBN 3-934071-57-0, 60 Seiten,</p>
        <p>zahlreiche Abbildungen und Notenbeispiele als Erstveröffentlichung,</p>
        <p>1.Auflage Sep. 2004, 2. Auflage Okt. 2006</p>
      </div>
      <br/>
      <div>
        <p style={{fontWeight: "bold"}}>„Georg Trexler – Wurzeln, Wirken, Werke, Vermächtnis“</p>
        <p>Kamprad-Verlag Altenburg, 1. Auflage 2003, ISBN 3-930550-24-5,</p>
        <p>264 Seiten, zahlreiche Abbildungen und Notenbeispiele</p>
      </div>
    </>
)


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
                            {author.name = "Gernot Maria Grohs" ? <GernotAuszeichnungen/> : console.log('no') }
                          </div>

                          <div className="mb-5">
                            <h5 style={{fontWeight: "bold"}} className="mb-3">Im Rosenfeld Verlag erschienen:</h5>
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

                          <div className="mb-5">
                            {author.name = "Gernot Maria Grohs" ? <WeitereBuecherVonGross/> : console.log('no') }
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
