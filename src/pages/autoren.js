import React from 'react'
import { graphql} from 'gatsby'
import Card from 'react-bootstrap/Card'
import Layout from '../components/Layout.js'
import '../styles/autoren.css'

const AutorenPage = props => {
    console.log(props)
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
                                            <Card.Title>{autor.name}</Card.Title>
                                            <Card.Subtitle className="mb-3">{autor.beruf}</Card.Subtitle>
                                        </div>
                                        <div className="ipad-flex">
                                            <div className="ipad-author-picture">
                                                <Card.Img className="autor-image mb-3" src={autor.image.url} alt={autor.name}/>
                                                <Card.Subtitle className="mb-3">{autor.fotoCredit}</Card.Subtitle>
                                            </div>
                                            <div className="ipad-author-bio">

                                                <Card.Link className="ipad-link" href={autor.slug}>...weiterlesen</Card.Link>
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
