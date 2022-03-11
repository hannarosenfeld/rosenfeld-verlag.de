import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'


const Autor = () => {
  const autorenData = useStaticQuery(graphql`
    {
    allDatoCmsAutor {
      nodes {
        slug
        originalId
        name
        biographie
        beruf
      }
    }
    }
  `)

  return (
    autorenData.map(autor => {
      <h1>{autor.name}</h1>
    })
  )

}
