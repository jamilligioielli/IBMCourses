import React from 'react' 
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
      <View style={styles.FlexV3}>
        <Quadrado />
        <Quadrado cor="#900" lado={20} />
        <Quadrado cor="#090" lado={30} />
        <Quadrado cor="#009" lado={40} />
        <Quadrado cor="#900" lado={50} />
        <Quadrado cor="#090" lado={60} />
        <Quadrado cor="#009" lado={70} />
      </View>
    );
}

const styles = StyleSheet.create({
    FlexV3:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      height: 350,
      width: '100%',
      backgroundColor: '#000',
    }
})