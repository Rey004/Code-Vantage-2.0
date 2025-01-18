import React from 'react'
import Herotext from './components/Herotext'
import Herostar from './components/Herostar'
import Herosidedecorleft from './components/Herosidedecorleft'
import Herosidedecorright from './components/Herosidedecorright'
import Linedivider from './components/Linedivider'
import './Herosection.css'

const Herosection = () => {
  return (
    <>
      <section id="hero" style={{ paddingTop: "10vh", width: "100%" }}>
        <div className="heroglow1"></div>
        <div className="heroglow2"></div>
        <div className="heroglow3"></div>
        <Herotext textType="solid"/>
        <Herostar />
        <Herotext textType="stroke"/>
        <Herosidedecorright />
        <Herosidedecorleft />
      </section>
      <Linedivider />
    </>
  )
}

export default Herosection
