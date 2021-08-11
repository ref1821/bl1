import React from 'react'
import './play.css'
import {useState} from 'react'




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
    var ale = new Array('yes', 'yes', 'yes', 'no', 'no')

    var dnum = num[Math.floor(Math.random()*num.length)];
    var dnum2 = num[Math.floor(Math.random()*num.length)];
    var cnum = num[Math.floor(Math.random()*num.length)];
    var cnum2 = num[Math.floor(Math.random()*num.length)];
    var alet = ale[Math.floor(Math.random()*num.length)];
    

    const [totalUno, setNumbers] = useState(dnum+dnum2)
    const [cTot, setTot] = useState(cnum+cnum2)
    

    const Cpu21 = () => {
        if(cTot<=21 & cTot>=15){
            if (alet === 'yes'){
                var cnum3 = num[Math.floor(Math.random()*num.length)];
                setTot(+cnum3)
                return(
                <p>hola</p>
                )
                }
                else if(alet === 'no'){
                    return(
                        <p>no</p>
                    )
                }
            }
            else if(cTot<15){
                var cnum4 = num[Math.floor(Math.random()*num.length)];
                setTot(+cnum4)
                return(
                    <p>hola</p>
                )
            }
            else {
                return(
                    <p>Lost</p>
                )
            }
        }
    

    return (
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
                    <p>Computer's numbers are {cnum} and {cnum2}</p>
                    
                </div>
                <div>
                    <button onClick={Cpu21}>Finish Game</button>
                </div>
        </div>
    )
}

export default Pl;
