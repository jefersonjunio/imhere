import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant';

export function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantsName)) {
      return Alert.alert("Participante existe", "Já existe um participante com esse nome.");
    }

    setParticipants(prevState => [...prevState, participantsName]);
    setParticipantsName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", "Remover o participante " + name, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado")
      },
      {
        text: "Não",
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6B6B6B'}
          onChangeText={text => setParticipantsName(text) }
          value={participantsName} />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>

        </TouchableOpacity>
      </View>
      
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)} />
        )}

        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista.
          </Text>
        )}
      />

    </View>
  );
}