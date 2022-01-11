import React from 'react'
import { Button } from 'react-native'


export default props => {
    
    function executar() {
        console.warn('Executor!')
    }

    return (
      <>
        <Button title="Executar #01" onPress={this.executar} />
        <Button
          title="Executar #02"
          onPress={function () {
            console.warn('Executor');
          }}
        />
        <Button
          title="Executar #03"
          onPress={() => console.warn('Executor') }
        />
      </>
    );

}
