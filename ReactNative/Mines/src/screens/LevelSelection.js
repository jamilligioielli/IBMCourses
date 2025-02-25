import React from 'react'
import { View, StyleSheet, Text, Modal, TouchableOpacity} from 'react-native'

const LevelButton = ({difficultyLevel, buttonLabel}) => {
  const styleButton = [styles.button];
  const levelSelected = {
    'Facil': styleButton.push(styles.bgEasy),
    'Intermediario': styleButton.push(styles.bgNormal),
    'Dificil': styleButton.push(styles.bgHard),
  }
  
  return (
    <TouchableOpacity
      style={levelSelected[buttonLabel]}
      onPress={() => props.onLevelSelected(difficultyLevel)}>
      <Text style={styles.buttonLabel}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
};

export default props => {
    return (
      <Modal
        onRequestClose={props.onCancel}
        visible={props.isVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.frame}>
          <View style={styles.container}>
            <Text style={styles.title}> Selecione o Nível </Text>
            {/* tentar criar outro componente */}
            <TouchableOpacity
              style={[styles.button, styles.bgEasy]}
              onPress={() => props.onLevelSelected(0.1)}>
              <Text style={styles.buttonLabel}>Fácil</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.bgNormal]}
              onPress={() => props.onLevelSelected(0.2)}>
              <Text style={styles.buttonLabel}>Intermediário</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.bgHard]}
              onPress={() => props.onLevelSelected(0.3)}>
              <Text style={styles.buttonLabel}>Difícil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    // dá pra agrupar classes igual no css normal?
    frame:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container:{
        backgroundColor:'#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title:{
        fontSize: 30,
        fontWeight:'bold',
    },
    button:{
        marginTop: 10,
        padding: 5,
    },
    buttonLabel:{
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy:{
        backgroundColor:'#49b65d'
    },
    bgNormal:{
        backgroundColor:'#2765f7'
    },
    bgHard:{
        backgroundColor:'#f26337'
    }

})
