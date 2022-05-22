import React, { useEffect } from "React"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'



export default function HaendlerLinks(props) {
    const book = props.book


    if(book.haendlerLink){
        const shop = book.haendlerLink
        return(
            <div className="mt-5">
              <p>Hier bestellen: </p>
            <div className="d-flex flex-column mt-3" style={{gap: "1.5em"}}>
              {shop.map(s => {
                  const logo = getImage(s.haendler.logo)
                  console.log(logo)
                  return(
                      <div>
                        <GatsbyImage image={logo} />
                      </div>
                  )
              })}

            </div>
            </div>
        )
    } else {
        console.log('no haendlerlink')
        return null
    }

}
