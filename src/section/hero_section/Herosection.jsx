import React from 'react'
import Herotext from './components/Herotext'
import Herostar from './components/Herostar'
import Herosidedecorleft from './components/Herosidedecorleft'
import Herosidedecorright from './components/Herosidedecorright'
import Linedivider from './components/Linedivider'

const Herosection = () => {
  return (
    <section id="hero" style={{marginTop: "10vh"}}>
        <Herotext textType="solid"/>
        <Herostar />
        <Herotext textType="stroke"/>
        <Herosidedecorright />
        <Herosidedecorleft />
        <Linedivider />
    </section>
  )
}

export default Herosection
