import React from 'react'
import { graphql} from 'gatsby'
import Card from 'react-bootstrap/Card'

import Layout from '../components/Layout.js'


export const query = graphql`
  query BuecherPageQuery{
    allContentfulBook {
      nodes {
        slug
        id
        title
        subtitle
      childContentfulBookDescriptionTextNode {
        description
      }
        coverImage {
          url
          id
        }
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
          <div>
            <h2 className="mb-5">Bücher</h2>
            <div className="books-container" style={{display: "flex", gap: "1.5em"}}>
              {props.data.allContentfulBook.nodes.map(book => {
                  return(
                      <Card className="book-container d-flex flex-column" style={{width: "15em"}} key={book.id}>
                        <Card.Body>
                          <Card.Title className="mb-3" style={{ fontWeight: "bold", fontSize: "1rem"}}>{book.title}</Card.Title>
                          <Card.Link href={book.slug}><Card.Img style={{width: "220px", boxShadow: "6px 6px 6px #c6c6c6"}} src={book.coverImage.url} alt={book.title}/></Card.Link>
                          <div className="book-description mb-4 mt-4" style={{width: "90%"}}>
                            <p style={{fontWeight: "bold", fontSize: "0.9em"}}>{book.subtitle}</p>
                            <Card.Text style={{fontSize: "0.9em"}} className="mt-3">{book.childContentfulBookDescriptionTextNode.description}</Card.Text>
                          </div>
                      <Card.Link  style={{fontSize: "0.8rem", fontWeight: "bold"}} href={`buecher/${book.slug}`}>...weiterlesen</Card.Link>
                        </Card.Body>
                      </Card>
                  )
              })}
            </div>
          </div>
        </Layout>
    )}


export default BooksPage
