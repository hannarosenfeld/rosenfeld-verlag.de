import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const GenericPage = props => {
  console.log(props)
  return (
    <Layout>
    <h1>{props.data.datoCmsPage.title}</h1>
    </Layout>
  )
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
