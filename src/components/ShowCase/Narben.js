import React from 'react'
import { graphql, useStaticQuery, Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"


const Narben = () => {
    const data = useStaticQuery(graphql`
    query Narben {
      contentfulBook(title: {eq: "Narben"}) {
        id
        title
        author {
          name
        }
        description {
          childMdx {
            body
          }
        }
        coverImage {
          gatsbyImageData(width: 220, placeholder: DOMINANT_COLOR)
        }
        backgroundImage {
          url
        }
      }
    }
    `)
    const coverImage = getImage(data.contentfulBook.coverImage)
    const book = data.contentfulBook
    return(
        <div style={{background: `url("${book.backgroundImage.url}")`, height: "52vw"}}>
          <div className="d-flex" style={{padding: "10em 8em", color: "#EEEEEE"}}>
            <div style={{width: "30%"}}>
              <section style={{background: "#FA2230", width: "12em", padding: "0.3em 0.5em", textAlign: "center", margin: "0.8em -2em", fontWeight: "bold"}}>NEUERSCHEINUNG</section>
              <GatsbyImage style={{border: "0.2em solid #EEEEEE"}} image={coverImage}/>
            </div>
            <div style={{width: "70%"}}>
              <h2>{book.author.name}</h2>
              <h1 className="mb-4" style={{color: "#FA2230", textTransform: "uppercase", fontSize: "3em"}}>{book.title}</h1>
              <div>
                <p className="mb-4" style={{width: "75%"}}>
                  <MDXProvider>
                    <MDXRenderer>
                      {book.description.childMdx.body}
                    </MDXRenderer>
                  </MDXProvider>
                </p>
                <Link to="/buecher/narben" ><section className="narbenlink" style={{color: "#EEEEEE"}}>mehr erfahren...</section></Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Narben
