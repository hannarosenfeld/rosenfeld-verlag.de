import React from 'react'

import cover from '../../images/45jahre.png'
import grohs from '../../images/grohs.jpg'


const Buch = () => (
    <section>
      <div>
        <div className="hero-banner">
          <div className="hero-content" style={{zIndex: "1", placeItems: "center"}}>
            <img src={cover} style={{gridColumn: "2/5"}}/>
            <h3>﻿Gernot Maria Grohs
            </h3>
            <h2>﻿25 Jahre und eine Nacht
            </h2>
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
            <p><a href="buecher/">mehr erfahren</a></p>
          </div>
        </div>
      </div>
    </section>
)


export default Buch
