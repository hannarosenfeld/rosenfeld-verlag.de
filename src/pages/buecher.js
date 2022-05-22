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


const BuecherPage = props => {
    return(
        <Layout>
          <main className="d-flex flex-column" >
            <h2 className="mb-5">Bücher</h2>
            <div className="d-flex flex-wrap autoren-container" style={{gap: "3em"}}>
              {props.data.allContentfulBook.nodes.map(book => {
                  return(
                      <div className="d-flex flex-wrap" >
                        <Card className="mb-5" style={{ width: '15em' }} key={book.slug}>
                          <Card.Body>
                            <div className="ipad-title mb-2">
                              <Card.Title style={{fontSize: "1rem", fontWeight: "bold"}}>{book.title}</Card.Title>
                            </div>
                            <div className="ipad-flex">
                              <div className="ipad-author-picture">
                                <Card.Link className="ipad-link" href={`buecher/${book.slug}`}  >
                                  <div style={{height: "21em"}}>
                                    <Card.Img
                                      className="autor-image mb-3"
                                      src={book.coverImage.url}
                                      style={{objectFit: "cover", width: "14em"}}
                                      alt={book.title}/>
                                  </div>
                                </Card.Link>
                                <Card.Subtitle className="mt-3 mb-4" style={{height: "5em", fontSize: "0.9em", fontWeight: "bold"}}>{book.subtitle}</Card.Subtitle>
                                {/* <Card.Subtitle style={{fontSize: "0.7em"}}className="mb-3">Foto: {autor.fotoCredit}</Card.Subtitle> */}
                              </div>
                              <div className="ipad-author-bio">
                                <Card.Text style={{fontSize: "0.8em"}} className="autoren-bio mb-1 ml-1">{book.childContentfulBookDescriptionTextNode.description}</Card.Text>
                                <Card.Link  style={{fontSize: "0.8rem", fontWeight: "bold"}} className="ipad-link" href={`buecher/${book.slug}`}>...weiterlesen</Card.Link>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                  )
              })}
            </div>
          </main>
        </Layout>
    )
}


export default BuecherPage
