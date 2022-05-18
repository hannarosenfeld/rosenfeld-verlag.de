import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


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
                  <div style={{width: "100%", background: "#D3D8C3"}}>
                    <div className="d-flex justify-content-between m-3 p-3">
                      <div className="d-flex" style={{gap: "1em"}}>
                        <GatsbyImage image={image}/>
                        <h3>{termin.autor}</h3>
                      </div>
                      <div>
                        <div className="d-flex" style={{gap: "1em"}}>
                          <h3>{termin.datum} / {termin.title}</h3>
                        </div>
                        <h3><a href={termin.link}>{termin.ort}</a></h3>
                        <h3></h3>
                      </div>
                    </div>
                  </div>
              )
          })}
        </>
    )
}
