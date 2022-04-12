import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'


export const query = graphql`
    query AutorPageQuery($autorPageId: String){
      contentfulAuthor(id : { eq: $autorPageId }){
        slug
        id
        name
        beruf
      childContentfulAuthorBioTextNode {
        childMarkdownRemark {
          html
        }
      }
        bio {
        childrenMarkdownRemark {
          html
        }
        }
        image {
        resize(width: 300) {
          width
          height
          src
        }
         }
        fotoCredit
      }
    }
`



const Autor = props => {
    const autor = props.data.contentfulAuthor
    return (
        <Layout>
            <div className="autor-detail-container d-flex mt-5 mb-5">
                <div className="autor-detail-image-container">
                    <img src={autor.image.resize.src}/>
                    <p>Foto: {autor.fotoCredit}</p>
                </div>
                <div style={{width: "70%", margin: "0 6em"}}>
                    <h1>{autor.name}</h1>
                    <p>{autor.beruf}</p>
                    <div
                        className="mt-5"
                        style={{width: "80%"}}
                        dangerouslySetInnerHTML={{ __html: autor.childContentfulAuthorBioTextNode.childMarkdownRemark.html,
                                                 }} />
                </div>
            </div>
        </Layout>
    )
}



export default Autor
