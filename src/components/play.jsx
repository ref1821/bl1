import React from 'react'
import Nav from './nav'
import Bottom from './bottom'
import './play.css'
import {useState} from 'react'

const Play = () => {
    //variables
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

    var dnum = num[Math.floor(Math.random()*num.length)];
    var dnum2 = num[Math.floor(Math.random()*num.length)];

    var cnum = num[Math.floor(Math.random()*num.length)];
    var cnum2 = num[Math.floor(Math.random()*num.length)];
    
    var totalUno = dnum + dnum2;

    const New = () => {
        console.log('works')
    }

    const [Numbers, setNumbers] = useState()

    const How = () => {
        console.log('works')
    }
    return (
        <div>
            <Nav></Nav>
            <div className="play">
                <button onClick={How} className='how'>How to play</button>
                <div className="person">
                    <h2 className='letter'>Your numbers</h2>
                    <p>Your numbers are {dnum} and {dnum2}</p>
                    <button onClick={New}>New number</button>
                </div>
                <div className='compu'>
                    <h2 className='letter'>Computer's numbers</h2>
                    <p>Computer's numbers are {cnum} and *</p>
                </div>
            </div>
            <Bottom></Bottom>
        </div>
    )
}

export default Play;
