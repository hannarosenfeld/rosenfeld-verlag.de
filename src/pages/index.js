import React from 'react'
import Layout from '../components/Layout.js'
import '../components/Section.css'
import lesung from '../videos/lesung.mp4'
import ShowCase from '../components/ShowCaseBuch.js'
const IndexPage = () => {
  return (
    <Layout>
      <div className="mt-5">
        <iframe
          width="100%"
          height="500px"
          src={lesung}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          xFrameOptions="SAMEORIGIN"
        />
      </div>
      <div className="section">
        <div className="section-inner">
          <h2>Was wir über die Welt wissen, das wissen wir vor allem über Bilder und über Texte von Autorinnen und Autoren, die uns ein Fenster zu einem anderen Ort öffnen. Der Rosenfeld Verlag setzt nun nach über 20 Jahren sein Programm fort und begibt sich wieder auf Reisen zu inneren und äußeren Orten, die unser Leben bereichern werden.</h2>
        </div>
      </div>
      <ShowCase/>
    </Layout>
  )
}


export default IndexPage
