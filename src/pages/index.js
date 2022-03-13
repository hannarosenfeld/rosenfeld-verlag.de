import React from 'react'
import Layout from '../components/Layout.js'
import '../components/Section.css'
import lesung from '../videos/lesung.mp4'
import ShowCase from '../components/ShowCaseBuch.js'
const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div className="">
          <video controls className="video-section" width="100%">
            <source src={lesung} type="video/mp4" />
          </video>
        </div>
        <div className="section">
          <div className="section-inner">
            <h2 style={{lineHeight: "2.75em"}}>Was wir über die Welt wissen, das wissen wir vor allem über Bilder und über Texte von Autorinnen und Autoren, die uns ein Fenster zu einem anderen Ort öffnen. Der Rosenfeld Verlag setzt nun nach über 20 Jahren sein Programm fort und begibt sich wieder auf Reisen zu inneren und äußeren Orten, die unser Leben bereichern werden.</h2>
          </div>
        </div>
      </div>
      <ShowCase/>
    </Layout>
  )
}


export default IndexPage
