import React from 'react'
import './play.css'
import How from './How'
import New from './new'
import Compu from './compu'



const Pl = () => {

    const as = 1;
    const dos = 2;
    const tres = 3;
    const cuatro = 4;
    const cinco = 5;
    const seis = 6;
    const siete = 7;
    const ocho = 8;
    const nueve = 9;
    const diez = 10;
    const joto = 10;
    const reina = 10;
    const rey = 10;

    var num = new Array(as, dos, tres, cuatro, cinco, seis, siete, ocho ,nueve, diez, joto, reina, rey);
    
    


    return (
        <div className="play">
            <How className='how'></How>
            <New></New>
            <Compu></Compu>
        </div>
    )
}

export default Pl;
