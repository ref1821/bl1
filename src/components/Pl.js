import React from 'react'
import './play.css'
import How from './How'
import New from './new'
import Compu from './compu'



const Pl = () => {

    return (
        <div className="play">
            <How className='how'></How>
            <New></New>
            <Compu></Compu>
        </div>
    )
}

export default Pl;
