import { useEffect, useState } from "react";
import { ScrollView } from "react-native-web";
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
     < ScrollView>
      {personajes.map((character) =>(
              <CharacterCard character={character} 
              key={character.id}/>
        ))}
    </ScrollView>
    );
}