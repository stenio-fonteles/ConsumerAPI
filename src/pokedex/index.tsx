import axios from "axios"
import { useEffect, useState } from "react";
import SelectPokemon from "./components";

export default function Pokedex(){
    const [dataPokemon, setDataPokemon] = useState([])
    const [paginations, setPaginations] =useState([])

    async function getPokemon(){
        const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon");
        console.log(data)
        setDataPokemon(data.results);
       setPaginations(data);
    }

    function selectPokemon(id) {
        //console.log(dataPokemon)
    }
    async function handleNext(){
        const {data} = await axios.get(paginations.next);
        setDataPokemon(data.results);
        setPaginations(data);
    }

    
    useEffect(() => { getPokemon()},[])
    return(
        <>
        {dataPokemon.map((pokemon) =>{
            return(
                <button onClick={ () => selectPokemon(pokemon)}key={pokemon.name}>{pokemon.name}</button>
            )
        })}
        <button onClick={handleNext}></button>

        
        
        </>
    )
}