import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'


const Buch = () => {
  const buecherData = useStaticQuery(graphql`
    {
      allDatoCmsBuch {
        nodes {
          zusammenfassung
          title
          subtitle
          originalId
        }
      }
    }
  `)

  return (
    buecherData.map(buch => {
      <h1>{buch.title}</h1>
    })
  )

}
