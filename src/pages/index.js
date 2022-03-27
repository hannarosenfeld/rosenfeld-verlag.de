import React, { useState }  from 'react'
import Layout from '../components/Layout.js'
import '../components/Section.css'
import './index.css'
import lesung from '../videos/lesung.mp4'
import ShowCase from '../components/ShowCaseBuch.js'


export default class IndexPage extends React.Component {
  componentDidMount(){
    const vid = document.getElementById('homepage-video')
    vid.currentTime = 15
    setTimeout(function () {
      vid.play()
      vid.addEventListener("mouseenter", function( event ) {
        return (
          <div>hi</div>
        )
      }, false);
    }, 5000);
  }
  render() {
    return (
      <Layout>
        <div>
          <div className="video-banner">
            <video id="homepage-video" className="video-section" width="100%">
              <source src={lesung} type="video/mp4" />
            </video>
          </div>
          <div className="">
            <div className="start-text">
              <p style={{lineHeight: "2em", padding: "0 1em"}}>
                Was wir über die Welt wissen, das wissen wir vor allem
                durch Bilder und über Texte von Autorinnen und Autoren,
                die uns ein Fenster zu einem anderen Ort öffnen. Der
                Rosenfeld Verlag setzt nun nach über 20 Jahren sein
                Programm fort und begibt sich wieder auf Reisen zu
                inneren und äußeren Orten, die unser Leben bereichern
                werden.
              </p>
            </div>
          </div>
        </div>
        <ShowCase/>
      </Layout>
    )
  }
}
