import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout.js'

const AutorenPage = props => {
  props.data.allDatoCmsAutor.nodes.map(autor => {
    console.log(autor.name)
  })

  return(
    <Layout>
      {props.data.allDatoCmsAutor.nodes.map(autor => {
        return(
          <div>
          <div className="autoren-container" key={autor.originalId}>
            <h4>{autor.name}</h4>
            <p>{autor.beruf}</p>
            <p>{autor.biographie}</p>
          </div>
          </div>
        )
      })}
    </Layout>
  )
}


export const query = graphql`
  query AutorenPageQuery{
    allDatoCmsAutor {
      nodes {
        originalId
        slug
        name
        biographie
        beruf
      }
    }
  }
`



export default AutorenPage
