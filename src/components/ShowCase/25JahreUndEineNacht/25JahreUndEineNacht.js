import React from 'react'

import './hero.css'
import cover from '../../../images/45jahre.png'



const Buch = () => (
    <section>
      <div>
        <div className="hero-banner">
          <div style={{zIndex: "1", gridColumn: "2/4", gridRow: "2/4"}}>
            <div className="hero-content" className="d-flex" style={{gap: "2em"}}>
              <img src={cover} style={{width: "12em"}}/>
              <div className="d-flex">
                <div className="hero-text d-flex flex-column" style={{width: "95%", gap: "1em"}}>
                  <h3>﻿Gernot Maria Grohs</h3>
                  <h2>﻿25 Jahre und eine Nacht</h2>
                  <p>﻿Es ist der 45. Hochzeitstag von Ludwig
                    und Tina. Es soll ein besonderer Tag
                    werden und deshalb werden die engsten
                    Freunde zur Feier des Jahrestages zu einem
                    Fest eingeladen. Man isst, trinkt und
                    schwelgt in gemeinsamen Erinnerungen eines
                    Lebens in Ostdeutschland, mit all seinen
                    Besonderheiten, Merkwürdigkeiten und
                    Brüchen. Als das Thema auf die Liebe, die
                    Treue und ...</p>
    <p className="mt-3" style={{fontWeight: "bold"}}><a href="buecher/">mehr erfahren</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)


export default Buch
