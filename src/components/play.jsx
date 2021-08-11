import React from 'react'
import Nav from './nav'
import Bottom from './bottom'
import './play.css'
import {useState} from 'react'
import { Fragment } from 'react'
import {} from './New'
import New from './New'
import How from './How'
import './New'

const Play = () => {

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

    const [totalUno, setNumbers] = useState(dnum+dnum2)

    return (
        <Fragment>
            <Nav></Nav>
            <div className="play">
                <button className='how'>How to play</button>
                <div className="person">
                    <h2 className='letter'>Your numbers</h2>
                    <p>Your numbers are {dnum} and {dnum2}</p>
                    <h4>Total: {totalUno}</h4>
                    <button >New number</button>
                    <h1></h1>
                </div>
                <div className='compu'>
                    <h2 className='letter'>Computer's numbers</h2>
                    <p>Computer's numbers are {} and *</p>
                    
                </div>
            </div>
            <Bottom></Bottom>
        </Fragment>
    )
}

export default Play;
