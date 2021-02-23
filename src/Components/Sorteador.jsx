import React, {Component} from 'react'
import './Sorteador.css'

import Botoes from "./Botoes"
import Form from "./Form"

export default class Contador extends  Component{

    state = {
        valor: 0,
        min: 0,
        max: 0,
        existValor: false,
    }

    alteraMin= (novoMin) => {
        this.setState({
           min: novoMin
        })
    }

    alteraMax = (novoMax) => {
        this.setState({
           max: novoMax
        })
    }

    sortearNumero =()=>{
        this.setState({
            valor: parseInt(Math.random() * (this.state.max- this.state.min))+ this.state.min,
            existValor: true
        })
        
    }


    render(){
        return(
            <div className="Sorteador">
                {!this.state.existValor ? 
                    <h1>Número sorteado:</h1>
                    : 
                    <h1>Número sorteado: {this.state.valor}</h1>
                }


                <Form alteraMin={this.alteraMin} alteraMax = {this.alteraMax}></Form>
                <Botoes sortear={this.sortearNumero}>Sortear Número</Botoes>
            </div>
        )
    }
}