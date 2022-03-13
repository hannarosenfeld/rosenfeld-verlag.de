import React from 'react'
import Layout from '../components/Layout.js'

import theo from '../images/rosenfeld.jpg'


const VerlagPage = () => (
  <Layout>
    <div className="d-flex">
      <div>
        <img src={theo} />
        <p>Theo Rosenfeld</p>
      </div>
      <div style={{padding: "0 2em"}}>
      <h2 className="mb-4">Der Rosenfeld Verlag</h2>
      <div>
        <p>
          1998 aus der Idee heraus gegründet, außergewöhnliche Autoren und Fotografen, die am Anfang ihrer Laufbahn standen, zu verlegen und zu fördern, hatte schon das erste Buch des Rosenfeld Verlages einen großen Erfolg: „Ausflug auf der Vjatka“ brachte der Fotografin Annette Hornischer den Kodak Fotobuchpreis und Alexander Ikonnikov, dem Autor der Essays über das Alltagsleben in russischen Dörfern, die Aufmerksamkeit etablierter Buchverlage ein.
        </p>
        <p>
          Nun setzt der Rosenfeld Verlag seine Arbeit mit der gleichen Begeisterung für die Werke jener Autoren fort, die uns eine unbekannte innere und äußere Lebenswelt näher bringen.
        </p>
        <p>
          Der Verleger Theo Rosenfeld, geboren 1966, ist Kopf und Herz des Verlags und in beiden Welten, in Bilder- und Sprachwelt gleichermaßen, als Texter, Designer und Fotograf seit über dreißig Jahren zu Hause.
        </p>
      </div>
      </div>
    </div>
  </Layout>
)

export default VerlagPage
