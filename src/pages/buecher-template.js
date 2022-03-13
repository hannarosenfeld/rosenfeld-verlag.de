import React from 'react'
import { graphql, Link } from 'gatsby'
import Card from 'react-bootstrap/Card'
import Layout from '../components/Layout.js'
//import './buecher.css'

const BuecherPage = props => {
  console.log(props)
  return(
    <Layout>
      <main className="d-flex flex-column">
        <h3 className="mt-5">Unsere Autorinnen und Autoren</h3>
        <div className="d-flex flex-wrap mt-4 autoren-container">
          {props.data.allDatoCmsBuch.nodes.map(buch => {
            return(
              <Card className="mb-5" style={{ width: '16rem' }} key={buch.originalId}>
                <Card.Body>
                  <div className="ipad-title">
                    <Card.Title>{buch.title}</Card.Title>
                    <Card.Subtitle className="mb-3">{buch.subtitle}</Card.Subtitle>
                  </div>
                  <div className="ipad-flex">
                    <div className="ipad-author-picture">
                      image
                  </div>
                  <div className="ipad-author-bio">
                    <Card.Text className="mb-3">{buch.zusammenfassung}</Card.Text>
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
  query BuecherPageQuery {
    allDatoCmsBuch {
      nodes {
        zusammenfassung
        title
        subtitle
        originalId
      }
    }
  }
`



export default BuecherPage
