import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'

import Mega from './components/mega/Mega'
// import FlexBoxV4 from './components/layout/FlexBoxV4'
// import FlexBoxV3 from './components/layout/FlexBoxV3'
// import FlexBoxV2 from './components/layout/FlexBoxV2'
// import FlexBoxV1 from './components/layout/FlexBoxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import Parimpar from './components/Parimpar'
// import Diferenciar from './components/Diferenciar'
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
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
    <Mega qtdNumeros={7}/>
    {/* <MinMax min={3} max={20} /> 
    <FlexBoxV4  />
    <FlexBoxV3  />
    <FlexBoxV2  />
    <FlexBoxV1  />
    <DigiteSeuNome  />
    <ListaProdutosV2  />
    <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gui.com'}} />
    <Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Carlos" sobrenome="Arruda" />
    </Familia>
    <Familia>
      <Membro nome="Ana" sobrenome="Silva" />
      <Membro nome="Julia" sobrenome="Silva" />
      <Membro nome="Gui" sobrenome="Silva" />
      <Membro nome="Rebeca" sobrenome="Silva" />
    </Familia>
    <Parimpar num={3}/>
    <Diferenciar />
    <ContadorV2/>
    <Pai />
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
