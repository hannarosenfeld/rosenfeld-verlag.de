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
          <div style={{margin: "7em auto"}}>
            <h2 className="mt-5">Bücher</h2>
            <div className="books-container" style={{margin: "3em auto", display: "flex"}}>
                {props.data.allContentfulBook.nodes.map(book => {
                    return(
                        <Card className="book-container d-flex flex-column" style={{width: "23%", marginRight:"3em"}} key={book.id}>
                            <Card.Body>
                              <Card.Title className="mb-3" style={{fontSize: "1rem"}}>{book.title}</Card.Title>
                        <Card.Link href={book.slug}><Card.Img src={book.coverImage.url} alt={book.title}/></Card.Link>
                              <div className="book-description mb-2" >
                                    <Card.Text className="mt-3">{book.childContentfulBookDescriptionTextNode.description}</Card.Text>
                                </div>
                        <Card.Link  style={{fontSize: "0.8rem"}} href={`buecher/${book.slug}`}>...weiterlesen</Card.Link>
                            </Card.Body>
                        </Card>
                    )
                })}
        </div>
        </div>
        </Layout>
    )}


export default BooksPage
