import React from 'react'
import Layout from '../components/Layout.js'
import Termin from '../components/Termin'

const TerminePage = () => (
    <Layout>
    <div style={{height: "29vw"}}>
    <div style={{marginTop: "7em", display: "flex"}}>
        <Termin/>
    </div>
    </div>
    </Layout>
)

export default TerminePage
