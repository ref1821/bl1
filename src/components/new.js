import React, { Component } from 'react'
export class New extends Component {
    
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
        var dnum=num[Math.floor(Math.random()*num.length)];
        var dnum2=num[Math.floor(Math.random()*num.length)];

        this.state = {
            n:'',
            num:dnum,
            num2:dnum2,
            cnum3: 0,
            totalUno:dnum+dnum2,
            qwe: 0,
        }
        
        
        
        
    }

    NN(){
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
        if (this.state.totalUno<=21){
            this.setState({
                cnum3: num[Math.floor(Math.random()*num.length)],
            },
            ()=>{
                this.setState({
                    n:this.state.n+'your new number is '+this.state.cnum3+'---------------------',
                    totalUno: this.state.totalUno+this.state.cnum3,
                })
            })
        }
        else if(this.state.qwe===0&&this.state.totalUno>21){
            this.setState({
                n:this.state.n+'you lost',
                qwe:this.state.qwe+1
            })
            
            console.log(this.state.qwe)
        }
        
        
    }
    
    render() {
        
        
        return (
            <div className="person">
                <h2 className='letter'>Your numbers</h2>
                <p>Your numbers are {this.state.num} and {this.state.num2}</p>
                <p>Total: {this.state.totalUno}</p>
                <button onClick={() => this.NN()}>New number</button>
                <p>{this.state.n}</p>
            </div>
        )
    }
}

export default New;