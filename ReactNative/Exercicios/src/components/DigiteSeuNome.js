import React, {useState} from 'react'; 
import { View, Text, TextInput} from 'react-native'
import Estilo from './estilo' 

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
     <View>
     {/* gera um evento dentro do input
        que altera o nome e reflete na interface gráfica
        o componente só se altera quando o estado altera -> estão amarrados
      */}
      <Text>{nome}</Text>
       <TextInput 
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={nome => setNome(nome)}
       />
     </View>
    )
}
