export async function getPersonajes(){
    const CHARACTERS =
    'https://rickandmortyapi.com/api/character';

const rawData = await fetch(`${CHARACTERS}`);//ojo, no es apostrofe...
const json = await rawData.json();
console.log("rawData:", rawData);
console.log("json:", json);

const {results} = json;
console.log("results:", results);

return results.map((item) => { //funcion flecha
    const {id, name, status, species, gender, episode, image} =
        item; //atributos de item, otra forma de declarar
    return {
        id, name, status, species, gender, episode, image
    };
    });
}