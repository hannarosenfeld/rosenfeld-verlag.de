import React from 'react'
import { graphql} from 'gatsby'

import Layout from '../components/Layout.js'


export const query = graphql`
  query BuecherPageQuery{
    allContentfulBook {
      nodes {
        id
        title
         author {
           beruf
           name
           id
         }
       }
     }
   }
`


const BooksPage = props => {
    return(
  <Layout>
      <div style={{margin: "2em auto", display: "flex", alignItems: "center"}}>
          {props.data.allContentfulBook.nodes.map(book => {
              return(
                  <h1>{ book.title }</h1>
              )
          })}
    </div>
  </Layout>
    )}

export default BooksPage
