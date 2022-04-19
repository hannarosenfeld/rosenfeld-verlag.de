import React from 'react'
import { graphql} from 'gatsby'
import Card from 'react-bootstrap/Card'
import Layout from '../components/Layout.js'
import '../styles/autoren.css'

const AutorenPage = props => {
    return(
        <Layout>
            <main className="d-flex flex-column" >
                <h2 style={{margin: "3em 0 2em 0"}}>Unsere Autorinnen und Autoren</h2>
                <div className="d-flex flex-wrap autoren-container">
                    {props.data.allContentfulAuthor.nodes.map(autor => {
                        return(
                            <div className="d-flex flex-wrap" >
                                <Card className="mb-5" style={{ width: '18rem' }} key={autor.originalId}>
                                    <Card.Body>
                                        <div className="ipad-title">
                                            <Card.Title style={{fontSize: "1rem"}}>{autor.name}</Card.Title>
                                            <Card.Subtitle className="mb-3" style={{fontSize: "0.8rem"}}>{autor.beruf}</Card.Subtitle>
                                        </div>
                                        <div className="ipad-flex">
                                            <div className="ipad-author-picture">
                                                <Card.Link className="ipad-link" href={autor.slug}>
                                                  <Card.Img
                                                    className="autor-image mb-3"
                                                    src={autor.image.url}
                                                    style={{width: "15em", height: "17em", objectFit: "cover"}}
                                                    alt={autor.name}/>
                                                </Card.Link>
                                                <Card.Subtitle className="mb-3">{autor.fotoCredit}</Card.Subtitle>
                                            </div>
                                            <div className="ipad-author-bio">
                                                <Card.Text className="autoren-bio mb-1 ml-1">{autor.bio.bio}</Card.Text>
                                                <Card.Link  style={{fontSize: "0.8rem"}} className="ipad-link" href={autor.slug}>...weiterlesen</Card.Link>
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
      childContentfulAuthorBioTextNode {
        childMarkdownRemark {
          html
        }
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
