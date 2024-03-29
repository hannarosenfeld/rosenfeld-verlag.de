import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaBeer } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'

import '../styles/global.css'

export default function Termin() {
    const data = useStaticQuery(graphql`
    query HeaderQuery {
      allContentfulTermin {
        nodes {
          title
          ort
          datum
          link
          autor
          image {
            gatsbyImageData(width: 150)
          }
        }
      }
    }
  `)
    return (
        <>
          {data.allContentfulTermin.nodes.map(termin => {
              const image = getImage(termin.image)
              return(
                  <div style={{width: "100%", background: "#B5CEB1", padding: "0% 2.5%"}}>
                    <div className="termin d-flex m-3 p-3 justify-content-between">
                      <div className="d-flex" style={{gap: "1em"}}>
                        <GatsbyImage style={{marginRight: "1em"}} image={image}/>
                        <h3 className="mt-4" style={{fontWeight: "bold"}}>{termin.autor}</h3>
                      </div>
                      <div className="mt-4 d-flex" style={{gap: "1em"}}>
                        <div>
                          <FaCalendar style={{fontSize: "2em", margin: "0 0.2em"}} />
                        </div>
                        <div>
                          <p style={{fontWeight: "bold"}}>{termin.datum} / {termin.title}</p>
                          <p><a href={termin.link}>{termin.ort}</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
              )
          })}
        </>
    )
}
