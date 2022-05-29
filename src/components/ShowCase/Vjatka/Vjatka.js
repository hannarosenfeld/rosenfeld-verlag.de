import React from 'react'
import { graphql, useStaticQuery, Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import ausflug from '../../../images/ausflug.png'

import './vjatka.css'

const Vjatka = () => {
    const data = useStaticQuery(graphql`
    query Vjatka {
      contentfulBook(slug: {eq: "ausflug-auf-der-vjatka"}) {
        title
        author {
          name
        }
        coverImage {
          gatsbyImageData(width: 220)
        }
        description {
          childMdx {
            body
          }
        }
      }
    }
    `)
    const book = data.contentfulBook
    const image = getImage(data.contentfulBook.coverImage)
    return(
        <div className="vjatka-container" style={{display: "grid", gridTemplateColumns: "9fr 5fr", height: "100%", background: "#CDC5C2"}}>
          <div style={{padding: "2em 2em 2em 4em"}}>
            <div className="d-flex" style={{gap: "1em"}}>
              <div style={{width: "30%"}}>
                <GatsbyImage image={image}/>
              </div>
              <div style={{width: "70%", margin: "0 1em"}}>
                <p className="mb-2" style={{fontWeight: "bold", fontSize: "0.9em"}}>{book.author.name}</p>
                <h3 className="mb-4" style={{fontWeight: "bold"}}>{book.title}</h3>
                <p className="mb-2">
»Ausflug auf der Vịatka« erzählt von den Erfahrungen der Fotografin, die sie mit dem wirklichen Leben in der russischen Provinz machen konnte. Ihre Schwarzweißbilder schließen bewußt an die authentischen Momente der klassischen Fotografie an, aber sie verschärfen deren Ausdruck durch eine neue Intimität, die aus der künstlerischen, anti-journalistischen Haltung der Autorin erwächst.
                </p>
                <Link style={{fontWeight: "bold"}} to="/buecher/ausflug-auf-der-vjatka">
                  <p>mehr erfahren...</p>
                </Link>
              </div>
            </div>
            <div className="mt-5">
              <p style={{fontWeight: "bold"}}>„Die Fotos sind ganz ohne Glamour und das macht die Bilder und die Menschen darauf verstörend, betörend zeitlos"</p>
              <p style={{float: "right"}}>Süddeutsche Zeitung </p>
            </div>
          </div>
          <div>
            <img src={ausflug}/>
          </div>
        </div>
    )
}

export default Vjatka
