import React from 'react'
import ausflug from '../images/ausflug.png'
import ausflug_cover from '../images/Vjatka.jpg'

import './ShowCaseBuch.css'

const ShowCase = () => (
  <div className="section">
    <div className="section-inner d-flex" style={{background: "#CDC5C2"}}>
      <div width="70%" className="showcase-container-text">
        <div className="d-flex p-5 showcase-container-text-inner">
          <div className="showcase-bookcover">
            <img src={ausflug_cover} width="190em"/>
          </div>
          <div className="showcase-text" style={{margin: "0 2em"}}>
            <h3>﻿Annette Hornischer (Frick)</h3>
            <h2>﻿Ausflug auf der Vjatka</h2>
            <p>»Ausflug auf der Vjatka« ist ein außergewöhnlicher und preisgekrönter Foto-Essay der Fotografin Annette Hornischer. Ihre Schwarzweißbilder schließen bewußt an die authentischen Momente der klassischen Fotografie an, aber sie verschärfen deren Ausdruck durch eine neue Intimität, die aus der künstlerischen, anti-journalistischen Haltung der Autorin erwächst.</p>
          </div>
        </div>
        <div style={{padding: "0 3em"}} >
          <blockquote style={{fontWeight: "bolder"}}>
            „Die Fotos sind ganz ohne Glamour und das macht die Bilder und die Menschen darauf verstörend, betörend zeitlos"
          </blockquote>
          <p style={{float: "right"}}>Süddeutsche Zeitung</p>
        </div>
      </div>
      <div width="30%" className="showcase-container-image">
        <img src={ausflug} />
      </div>
    </div>
  </div>
)

export default ShowCase
