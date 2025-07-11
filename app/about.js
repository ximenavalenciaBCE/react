import { Link } from "expo-router";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function About (){
    return (
        <ScrollView >
            
            <View >
                <Text >HOLA RICKY MORTY</Text>
               
                <Link href="/" >
                    <Text> Volver al inicio</Text>
                </Link>
            </View>
        </ScrollView>
    );    
}