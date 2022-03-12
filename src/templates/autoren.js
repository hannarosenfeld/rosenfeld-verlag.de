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
      <div className="d-flex flex-wrap">
      {props.data.allDatoCmsAutor.nodes.map(autor => {
        return(
          <Card style={{ width: '18rem' }} key={autor.originalId}>
            <Card.Body>
              <Card.Title>{autor.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{autor.beruf}</Card.Subtitle>
              <Card.Img src={autor.autorenBild.gatsbyImageData.images.fallback.src} />
              <Card.Text>{autor.biographie}</Card.Text>
              <Card.Link href="#">...weiterlesen</Card.Link>
            </Card.Body>
          </Card>
        )
      })}
      </div>
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
        autorenBild {
          gatsbyImageData
        }
      }
    }
  }
`



export default AutorenPage
