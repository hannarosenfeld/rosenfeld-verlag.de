import React, { useState }  from 'react'
import {Modal} from 'react-bootstrap'

import Layout from '../components/Layout.js'


import lesung from '../videos/lesung.mp4'
import ShowCase from '../components/ShowCaseBuch.js'


function VideoBanner(){
    const [isShown, setIsShown] = useState(false);

    return(
          <div
            className="video-banner"
            style={{
                width: "100%",
                position: "relative",
                zIndex: "0",
                display: "flex",
            }}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {isShown && (
                <div style={{
                    fontSize: "1.8em",
                    margin: "0",
                    top: "50%",
                    left: "50%",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    padding: "2.2em",
                    zIndex: "10",
                    position: "absolute",
                    display: "block",
                    color: "red",
                    border: "2px solid salmon",
                    background: "pink",
                }}>
                  Ton einschalten mit Klick
                </div>
            )}
        <video muted controls id="homepage-video" className="video-section" style={{width: "100%"}}>
              <source src={lesung} type="video/mp4" />
            </video>
          </div>
    )
}

function IndexPage() {

    return (
        <>
          <VideoBanner/>
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
          <ShowCase/>
        </>
    )
}


export default IndexPage
