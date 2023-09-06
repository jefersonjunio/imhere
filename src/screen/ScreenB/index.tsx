import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';


export function ScreenB() {
  const navigation  = useNavigation();
  
  function openScreenHome() {
    navigation.navigate('home');
  }

  return ( 
    <View style={styles.container}>
        <Text style={styles.texto}>Tela B</Text>
        <Button title='Tela home' onPress={openScreenHome}/>

        
    </View>
  );
}