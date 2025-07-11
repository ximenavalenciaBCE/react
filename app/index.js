import { View, StyleSheet} from 'react-native';
import Logo from '../components/Logo';
import { Main } from '../components/Main';
import { StatusBar } from 'expo-status-bar';


export default function Index(){
    return(
    <View style={styles.container}>
        <StatusBar style='light'/>  
        <Logo style={styles.logo} />
            <Main/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
    logo:{
    backgroundColor: '#C0C0C0',
    padding: 20
  }
  });
