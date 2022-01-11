import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'


import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro'


// const App = function () {
    // Tags usando JSX 
    // para ter jsx, precisa importar o react
    // return <Text>Primeiro componente!</Text>
    // return jsx
// }

// export default App
export default () => (
  <SafeAreaView style={style.App}>
    <Pai />
    {/* <MinMax min={3} max={20} /> 
    <Contador inicial={100} passo={13}/>
    <Contador />
    <Botao />
    <Titulo principal="Cadastro do Produto" secundario="Tela de Cadastro do Produto"/>
    <Aleatorio min={3} max={10} />
    {<CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro />} */}
  </SafeAreaView>
);

const style = StyleSheet.create({
    App: {
        // flex 1 == flex-grow
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,        
    }
})
