import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'


export const query = graphql`
    query AutorPageQuery($autorPageId: String){
      contentfulAuthor(id : { eq: $autorPageId }){
        slug
        id
        name
        image {
          url
         }
      }
    }
`



const Autor = props => {
    const autor = props.data.contentfulAuthor
    return (
        <Layout>
            <div className="autor-detail-container d-flex">
                <h1>{autor.name}</h1>
                <div className="autor-detail-image-container">
                    <img src={autor.image.url}/>
                </div>
            </div>
        </Layout>
    )
}



export default Autor
