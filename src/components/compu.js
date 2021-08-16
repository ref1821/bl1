import React, { Component } from 'react'

export class Compu extends Component {
    constructor(props) {
        super(props)
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
        var num1 = num[Math.floor(Math.random()*num.length)];
        var num2 = num[Math.floor(Math.random()*num.length)];
        
        this.state = {
            cnum: num1,
            cnum2: num2,
            cTotal:num1+num2,
            cnum3:0,
            fn:'',
            n:0,
        }
    }
    
    Finish() {
        console.log(this.state.cnum+' '+ this.state.cnum2+' '+ this.state.cTotal)
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
        var ale = new Array('yes', 'yes', 'yes', 'no', 'no');
        var alet = ale[Math.floor(Math.random()*ale.length)];
        console.log(alet);
        if(this.state.cTotal>=15&&this.state.cTotal<21&&this.state.n===0){
            if(alet==='yes'){
                this.setState({
                    cnum3: num[Math.floor(Math.random()*num.length)],
                },
                ()=>{
                    this.setState({
                
                        cTotal: this.state.cTotal+this.state.cnum3,
                    },
                    ()=>{this.setState({
                        fn:"computer's number: "+this.state.cTotal
                    })}
                    )
                    console.log(this.state.cTotal)
                })
            }
        }
        else{this.setState({
            fn:"computer's number: "+this.state.cTotal
        })

        }
        this.setState({
            n:this.state.n+1
        })
    }

    render() {
        return (
            <div>
                <div className='compu'>
                <h2 className='letter'>Computer's numbers</h2>
                <p>Computer's numbers are {this.state.cnum}  and {this.state.cnum2} </p>
                <p>{this.state.fn}</p>
                
            </div>
            <div>
                <button onClick={()=>this.Finish()}>Finish Game</button>
            </div>
            </div>
        )
    }
}

export default Compu;
