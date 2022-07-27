import axios from "axios"
import { useEffect, useState } from "react";
import SelectPokemon from "./components";

export default function Pokedex(){
    const [dataPokemon, setDataPokemon] = useState([])
    const [paginations, setPaginations] =useState([])
    const [bioPokemon, setBioPokemon] = useState([])

    async function getPokemon(){
        const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setDataPokemon(data.results);
        setPaginations(data);
    }

    async function getBioPokemon(indice) {
        let newIndice = indice + 1
        const {data} =  await axios.get(`http://pokeapi.co/api/v2/pokemon-form/${newIndice}/`)
        setBioPokemon(data.sprites)
    }
    
    console.log(bioPokemon)


     function selectPokemon(id) {
        let indice = dataPokemon.findIndex(key => key == id)
        getBioPokemon(indice)
    }
    async function handleNext(){
        const {data} = await axios.get(paginations.next);
        setDataPokemon(data.results);
        setPaginations(data.sprites);
    }
    

    useEffect(() => { getPokemon()},[])
    return(
        <>
        {dataPokemon.map((pokemon) =>{
            return(
                <button onClick={ () => selectPokemon(pokemon) }key={pokemon.name}>{pokemon.name}</button>
            )
        })}
        {<br></br>}
        <button onClick={handleNext}>- Próximo -</button>
        <img src={bioPokemon.back_default}/>

        </>
    )
}