import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Header from './Header';

export default function Home() {
  const navigation = useNavigation()
  const [contador, setContador] = useState(0)

  function incrementar(){
    setContador(contador + 1)
  }

  return (
    <>
      <Header title="Header Param" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>
        <Text>{contador} toques!</Text>

        <TouchableOpacity style={styles.button} onPress={incrementar} >
          <Text>Press Here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Form')}>
          <Text>Navegar</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474A51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#dddddd',
    padding: 10
  }
});
