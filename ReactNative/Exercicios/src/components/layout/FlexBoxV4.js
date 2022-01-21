import React from 'react' 
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
      <View style={styles.FlexV4}>
        <View style={styles.V0}/>
        <View style={styles.V1}/>
        <View style={styles.V2}/>
      </View>
    );
}

const styles = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000',
  },

  V0: { 
    backgroundColor: '#36c9a7',
    height: 300,
  },

  V1: {
    backgroundColor: '#ff801a',
    flexGrow: 1,
  },

  V2: {
    backgroundColor: '#dd22c1',
    flexGrow: 1,
  },
});