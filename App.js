import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Button, ScrollView } from 'react-native-web';
import { getPersonajes } from './lib/rickyMorty';
import Logo from './components/Logo';
import { CharacterCard } from './components/CharacterCard';

export default function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    getPersonajes().then((data) =>{
      setPersonajes(data);
      console.log("personajes:", data);
    })
  },[]);


  return (
    <View style={styles.container}>
      <StatusBar style='light'/>  
      <Logo style={styles.logo} />
      <ScrollView>
        {personajes.map((character) =>(
         <CharacterCard character={character} />
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
  image:{
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  card:{
    backgroundColor: '#fff',
    padding: 20,
    borderRadius:10,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#fff'
  },
  species:{
    fontSize: 16,
    color: '#fff'
  },
  status:{
    fontSize: 16,
    color: '#33caff'
  },
  gender:{
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  logo:{
    backgroundColor: '#333',
    padding: 20
  }
});
