import React from 'react'
import Herotext from './components/Herotext'
import Herostar from './components/Herostar'

const Herosection = () => {
  return (
    <section id="hero">
        <Herotext textType="solid"/>
        <Herostar />
        <Herotext textType="stroke"/>
    </section>
  )
}

export default Herosection
