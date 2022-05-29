import React from 'react'

import './hero.css'
import cover from '../../../images/45jahre.png'



const Buch = () => (
    <section>
      <div>
    <div className="hero-banner" style={{height: "50vw"}}>
      <div style={{zIndex: "1"}}>
        <div className="hero-content d-flex" style={{gap: "1em", margin: "10% 5%", width: "60%"}}>
          <img src={cover} className="hidden" style={{alignSelf: "start", width: "100%", margin: "0.5em"}}/>
              <div className="d-flex" >
                <div className="hero-text d-flex flex-column" style={{gap: "0.2em", margin: "0.5em"}}>
                  <h3>﻿Gernot Maria Grohs</h3>
                  <h2>﻿25 Jahre und eine Nacht</h2>
                  <p className="truncate">﻿Es ist der 45. Hochzeitstag von Ludwig
                    und Tina. Es soll ein besonderer Tag
                    werden und deshalb werden die engsten
                    Freunde zur Feier des Jahrestages zu einem
                    Fest eingeladen. Man isst, trinkt und
                    schwelgt in gemeinsamen Erinnerungen ...</p>
    <p className="mt-1" style={{fontWeight: "bold"}}><a href="buecher/">mehr erfahren</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)


export default Buch
