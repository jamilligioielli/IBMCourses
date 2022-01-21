import React from 'react' 
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
      <View style={styles.FlexV1}>
        <Quadrado />
        <Quadrado cor="#900" />
        <Quadrado cor="#090" />
        <Quadrado cor="#009" />
        <Quadrado cor="#900" />
        <Quadrado cor="#090" />
        <Quadrado cor="#009" />
      </View>
    );
}

const styles = StyleSheet.create({
    FlexV1:{
        flexGrow: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#000',
    }
})