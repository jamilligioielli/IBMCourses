import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default props => {
    const {min, max} = props
    const delta = max - min + 1
    const random = Math.floor(Math.random() * (delta) + min);
    return(
    <Text style={Estilo.txtG}>
       O valor aleatorio é {random}
    </Text>
    );

}

