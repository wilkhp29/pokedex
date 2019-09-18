import React,{useEffect,useState} from 'react';
import api from "../../services/api";
// import { Container } from './styles';

export default function List({match }) {
    const [pokemons,setPokemons] = useState([]);
    useEffect(()=>{
        async function getPokemon(){
           const {data} = await api.get(`type/${match.params.name}`);

           for(let i =0;i < data.pokemon.length;i++){
             const pokemonsList = data.pokemon[i];
               
             let list = []
             const {data:pokemon} = await api.get(`pokemon/${pokemonsList.pokemon.name}`);
             list.push(pokemons);
             list.push(pokemon);
             setPokemons(list);
           }
           
        }
        getPokemon();
    },[match.params.name])
      
  return (
   <ul>
       {pokemons.map((pokemon) => <li key={pokemon.id} >{pokemon.name}</li>)}
   </ul>
  );
}
