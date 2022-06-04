import React from 'react'
import { graphql, Link } from 'gatsby'
import Card from 'react-bootstrap/Card'
import Layout from '../components/Layout.js'
import '../styles/autoren.css'

const AutorenPage = props => {
    return(
        <Layout>
          <main className="d-flex flex-column" >
            <h2 className="mb-5">Unsere Autorinnen und Autoren</h2>
            <div className="d-flex flex-wrap autoren-container" style={{gap: "3em"}}>
              {props.data.allContentfulAuthor.nodes.map(autor => {
                  return(
                      <div className="d-flex flex-wrap" >
                        <Card className="mb-5" style={{ width: '15em' }} key={autor.originalId}>
                          <Card.Body>
                            <div className="ipad-title">
                              <Card.Title style={{fontSize: "1rem", fontWeight: "bold"}}>{autor.name}</Card.Title>
                              <Card.Subtitle className="mb-3" style={{fontSize: "0.8rem"}}>{autor.beruf}</Card.Subtitle>
                            </div>
                            <div className="ipad-flex">
                              <div className="ipad-author-picture">
                                <Link
                                  className="ipad-link"
                                  to={`${autor.slug}`}
                                  state={{ fromFeed: true }}
                                >
                                  <Card.Img
                                    className="autor-image mb-3"
                                    src={autor.image.url}
                                    style={{width: "220px", height: "17em", objectFit: "cover"}}
                                    alt={autor.name}/>
                                </Link>
                                <Card.Subtitle style={{fontSize: "0.7em"}}className="mb-3">Foto: {autor.fotoCredit}</Card.Subtitle>
                              </div>
                              <div className="ipad-author-bio">
                                <Card.Text style={{fontSize: "0.8em"}} className="autoren-bio mb-1 ml-1">{autor.bio.bio}</Card.Text>
                                <Link
                                  style={{fontSize: "0.8rem", fontWeight: "bold"}}
                                  className="ipad-link"
                                  to={`${autor.slug}`}
                                  state={{ fromFeed: true }}
                                >...weiterlesen</Link>
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


export const query = graphql`
  query AutorenPageQuery{
  allContentfulAuthor {
    nodes {
      slug
      beruf
      bio {
        bio
      }
      id
      name
      image {
        url
      }
      fotoCredit
    }
  }
}
`




export default AutorenPage
