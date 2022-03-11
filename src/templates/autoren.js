import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout.js'
import './autoren.css'

const AutorenPage = props => {
  props.data.allDatoCmsAutor.nodes.map(autor => {
    console.log(autor.name)
  })

  return(
    <Layout>
      {props.data.allDatoCmsAutor.nodes.map(autor => {
        return(
          <div className="autoren-container">
          <div className="autor-container" key={autor.originalId}>
            <h5>{autor.name}</h5>
            <p>{autor.beruf}</p>
            <p>{autor.biographie}</p>
            <Link >...weiterlesen</Link>
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
