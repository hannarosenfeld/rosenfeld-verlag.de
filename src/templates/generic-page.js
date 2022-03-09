import React from 'react'
import { graphql } from 'gatsby'

const GenericPage = props => {
  console.log(props)
  return <h1>{props.data.datoCmsPage.title}</h1>
}


export const query = graphql`
  query PageQuery($pageId: String) {
    datoCmsPage(originalId: { eq: $pageId }) {
      title
      slug
      originalId
    }
  }
`


export default GenericPage
