import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './MegaNumero'

export default class Mega extends Component {
    // o nome das propriedades é por padrao props no component

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    // constructor(props) {
    //     super(props)

    //     this.alterarQtdNumero = this.alterarQtdNumero.bind(this)
    // }

    // o this dentro de um arrow function nunca vai mudar
    // já que a funcao foi definida dentro de uma classe, o this vai apontar para a instancia da classe
    alterarQtdNumero = (qtd) => {
        this.setState({ qtdNumeros: +qtd })
    }

    gerarNumeroNaoContido = nums =>{
        const novo = parseInt(Math.random() * 60) + 1

        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a,b) => a - b)
        this.setState({numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                    {this.state.qtdNumeros}    
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtd de Números"
                    value={`${this.state.qtdNumeros}`}
                    // o this numa arrow function vai apontar para onde a funcao foi definida
                    // onChangeText={qtd => this.alterarQtdNumero(qtd)}
                    onChangeText={this.alterarQtdNumero}
                 />
                 <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                 />
                 <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}> 
                    {this.exibirNumeros()}
                 </View>
            </>
        )
    }

}
