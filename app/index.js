import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import { Main } from '../components/Main';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';


export default function Index(){
    return(
    <View style={styles.container}>
        <StatusBar style='light'/>  
        <Logo style={styles.logo} />
        <Link href="/about" asChild>
            <TouchableOpacity >
                <Text > Acerca de </Text>
            </TouchableOpacity>
        </Link>
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
