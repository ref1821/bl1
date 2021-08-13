import React from 'react'
import './play.css'
import {useState} from 'react'
import How from './How'
import New from './new'
import cnum3 from './new'




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
    
    var cnum = num[Math.floor(Math.random()*num.length)];
    var cnum2 = num[Math.floor(Math.random()*num.length)];
    
    
    const [numc, setNum3] = useState(cnum)
    const [numc2, setNum4] = useState(cnum2)



    return (
        <div className="play">
            <How className='how'></How>
            <New></New>
            <div className='compu'>
                <h2 className='letter'>Computer's numbers</h2>
                <p>Computer's numbers are {numc} and {numc2}</p>
                
            </div>
            <div>
                <button>Finish Game</button>
            </div>
        </div>
    )
}

export default Pl;
