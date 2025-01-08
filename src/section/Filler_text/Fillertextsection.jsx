import React from 'react'
import Fillersidedecorleft from './components/Fillersidedecorleft';
import Fillersidedecorright from './components/Fillersidedecorright';
import Fillertext from './components/Fillertext';
import './Fillertext.css';

const Fillertextsection = () => {
  return (
      <div className="filler-text-div">
        <div className="filler-side-decor-left">
          <Fillersidedecorleft />
        </div>
        <Fillertext />
        <div className="filler-side-decor-right">
          <Fillersidedecorright />
        </div>
    </div>
  )
}

export default Fillertextsection
