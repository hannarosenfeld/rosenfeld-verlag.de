import React from 'react'
import { graphql, Link } from 'gatsby'
import Card from 'react-bootstrap/Card'
import Layout from '../components/Layout.js'
import './autoren.css'

const AutorenPage = props => {
  props.data.allDatoCmsAutor.nodes.map(autor => {
    console.log(autor.autorenBild.gatsbyImageData.images.fallback.src)
  })

  return(
    <Layout>
      <main className="d-flex flex-column">
        <h3 className="mt-5">Unsere Autorinnen und Autoren</h3>
        <div className="d-flex flex-wrap mt-4 autoren-container">
          {props.data.allDatoCmsAutor.nodes.map(autor => {
            return(
              <Card className="mb-5" style={{ width: '16rem' }} key={autor.originalId}>
                <Card.Body>
                  <div className="ipad-title">
                    <Card.Title>{autor.name}</Card.Title>
                    <Card.Subtitle className="mb-3">{autor.beruf}</Card.Subtitle>
                  </div>
                  <div className="ipad-flex">
                  <div className="ipad-author-picture">
                    <Card.Img className="mb-3" src={autor.autorenBild.gatsbyImageData.images.fallback.src} />
                    <Card.Subtitle className="mb-3">{autor.fotoCredit}</Card.Subtitle>
                  </div>
                  <div className="ipad-author-bio">
                    <Card.Text className="mb-3">{autor.biographieKurz}</Card.Text>
                    <Card.Link className="ipad-link" href="#">...weiterlesen</Card.Link>
                  </div>
                  </div>
                </Card.Body>
              </Card>
            )
          })}
        </div>
      </main>
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
        biographieKurz
        beruf
        fotoCredit
        autorenBild {
          gatsbyImageData
        }
      }
    }
  }
`



export default AutorenPage
