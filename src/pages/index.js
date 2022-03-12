import React from 'react'
import Layout from '../components/Layout.js'

import lesung from '../videos/lesung.mp4'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <iframe
          width="100%"
          height="500px"
          src={lesung}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </div>
    </Layout>
  )
}


export default IndexPage
