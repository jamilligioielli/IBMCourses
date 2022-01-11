import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default props => (
    // Para retonar mais de um elemento, precisam estar envolvidos no fragment -> na View, no React.Fragment ou Fragment, ou somente <> </>
      <React.Fragment>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
      </React.Fragment>
    );

