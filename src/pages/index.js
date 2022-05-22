import React, { useState }  from 'react'
import {Modal} from 'react-bootstrap'

import NavBarSticky from '../components/ShowCase/NavBarSticky'
import Newsletter from '../components/Newsletter'
import lesung from '../videos/lesung.mp4'
import Vjatka from '../components/ShowCase/Vjatka/Vjatka'
import Termin from '../components/Termin'
import Narben from '../components/ShowCase/Narben/Narben'
import Buch from '../components/ShowCase/25JahreUndEineNacht/25JahreUndEineNacht'
import Footer from '../components/Footer'



import '../styles/index.css'




function IndexPage() {

    return (
        <div>
          <NavBarSticky/>
          <Narben/>
          <div style={{width: "95%", margin: "0 auto", padding: "1em"}}>
            <div className="">
              <div className="start-text">
                <p style={{lineHeight: "2em", fontSize: "1.5em"}}>
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
            <Buch/>
            <VideoBanner/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Vjatka/>
            <br/>
            <br/>
            <br/>
            <Termin/>
            <Newsletter/>
            <Footer/>
          </div>
        </div>
    )
}


export default IndexPage

function VideoBanner(){
    const [isShown, setIsShown] = useState(false);
    function handleClick(e) {
        var video = document.querySelector("video")

        if(isShown === true) {
                     video.setAttribute("muted", "false")
            video.muted = !video.muted;
            document.getElementById("video-modal").style.display = "none"
        } else {
            console.log("hi")
        }
    }
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
          {isShown && document.querySelector("video").muted === true && (
              <div
                id="video-modal"
                style={{
                    fontSize: "1.8em",
                    margin: "0",
                    top: "50%",
                    left: "50%",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    padding: "1.8em",
                    zIndex: "10",
                    position: "absolute",
                    display: "block",
                    color: "#f9f9f9",
                    background: "rgba(33,33,33, 0.8)",
                    borderRadius: "0.23em"
                }}
                onClick={handleClick}
              >
                Ton einschalten mit Klick
              </div>
          )}
          <video autoPlay muted id="homepage-video" className="video-section" style={{width: "100%"}}>
            <source src={lesung} type="video/mp4" />
          </video>
        </div>
    )
}
