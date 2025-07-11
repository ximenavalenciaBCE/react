import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView } from "react-native-web";
import { CharacterCard } from "./CharacterCard";
import { getPersonajes } from "../lib/rickyMorty";

export function Main() {

       const [personajes, setPersonajes] = useState([]);

       useEffect(() => {
            getPersonajes().then((data) =>{
            setPersonajes(data);
            console.log("personajes:", data);
            })
        },[]);

    return (
        <>
        {personajes.length === 0 ?( 
            <ActivityIndicator size={"large"}/>
        ): (
            <FlatList
            data = {personajes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={
                ({item, index}) => (
                    <CharacterCard character={item} index={index} />
                )

            }  
            >
            </FlatList>
        )
    }
    </>
    );
}