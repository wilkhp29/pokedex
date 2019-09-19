import React, {useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { Link } from "react-router-dom";
import chamada from "axios";
import api from "../../services/api";
import { Container } from './styles';
import PokemonDetail from "../pokemon";

export default function Detalhes({pokemon,history}) {
  const dispatch = useDispatch();
  const [img,setImg] = useState(pokemon.sprites.front_default)
  const [evolution,setEvolution] = useState([]);
  const [habilidades,setHabilidades] = useState([]);
  const dados = useSelector((state) => state.pokedex.filter((item) => item.id === pokemon.id));

  useEffect(() => {
     async function getEvolutions(){
      const {data:pokemonSpecies} = await api.get(`pokemon-species/${pokemon.name}`);
      const habilidades  = pokemon.abilities.map(async habilidade => { 
         const  {data:hb} = await chamada.get(habilidade.ability.url)
        return hb;
        });

        const hb = await Promise.all(habilidades);
        
        setHabilidades(hb);
      
        
      if(pokemonSpecies){
      const {data:pokemonEvolution} = await chamada.get(`${pokemonSpecies.evolution_chain.url}`);
    
        if(pokemonEvolution){
          const pokemons = [];
      try {
        const {data:babyPokemon} = await api.get(`pokemon/${pokemonEvolution.chain.species.name}`);
        pokemons.push(babyPokemon);
        const {data:teenPokemon} = await api.get(`pokemon/${pokemonEvolution.chain.evolves_to[0].species.name}`);
        pokemons.push(teenPokemon);
        const {data:oldPokemon} = await api.get(`pokemon/${pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name}`);
        pokemons.push(oldPokemon);
      } catch (error) {
          console.error(error);
      }finally{
        setEvolution(pokemons);
      }
        }
      }
    }
    

    getEvolutions()
  },[])

  useEffect(() => {
      dados[0]?setImg(dados[0].sprites.front_default):setImg(pokemon.sprites.front_default);
      
  },[pokemon.id])

  function onChangeHandler(event){
   pokemon.sprites.front_default =  URL.createObjectURL(event.target.files[0]);
   setImg(URL.createObjectURL(event.target.files[0]));
  }

  function handlerCapturar(){
    pokemon.sprites.front_default = img;
    dispatch({type:'ADD_POKEDEX',pokemon});
  }

  function handlerDelete(){
    dispatch({type:'DELETE_POKEDEX',pokemon});
  }

  console.log(habilidades);
  return (
    <>
    <Container >
      <div>
    <h3>Nome: {pokemon.name.toUpperCase()} Nº{pokemon.id}</h3>
    <h4>Peso: {pokemon.weight/10}kg Tamanho: {pokemon.height/10}m</h4>
    <div>
        <input type="file" name="file" onChange={onChangeHandler}/>
        <img src={img} width="200"/>
           <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
             {pokemon.types.map((tipos,index) => <Link key={index} className={tipos.type.name} to={`/lista/${tipos.type.name}`}>{tipos.type.name}</Link>)}
           </div> 
    </div>
    <table>
        <tr>
          <th>Base</th>
          <th>Stats</th>
        </tr>
        <tr>
          <td>HP:</td>
          <td>{pokemon.stats[5].base_stat}</td>
        </tr>
        <tr>
          <td>Ataque:</td>
          <td>{pokemon.stats[4].base_stat}</td>
        </tr>
        <tr>
          <td>Defesa:</td>
          <td>{pokemon.stats[3].base_stat}</td>
        </tr>
        <tr>
          <td>Sp.Attack:</td>
          <td>{pokemon.stats[2].base_stat}</td>
        </tr>
        <tr>
          <td>Sp.Defense:</td>
          <td>{pokemon.stats[1].base_stat}</td>
        </tr>
        <tr>
          <td>Velocidade:</td>
          <td>{pokemon.stats[0].base_stat}</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>Habilidades</th>
        </tr>
        {habilidades.map((habilidade,index) => <tr style={{background:index/2==0&&'#ecf0f1',cursor:"pointer"}} onClick={() => alert(habilidade.effect_entries[0].short_effect)} key={index}><td style={{padding:10}} >{habilidade.name}</td></tr>)}
      </table>
      <button onClick={() =>handlerCapturar()}>
        {dados[0]? "Atualizar foto":"Adicionar ao meu pokédex"}
      </button>

      {dados[0] &&  (
        <button onClick={() => handlerDelete()}>
          Remover do meu pokédex
        </button>
      )}
      </div>
    </Container>

    <h4 style={{marginTop:20}}>Evoluções</h4>
    <ul style={{display:"flex",width:'100%;',justifyContent:"space-between",alignItems:"center",}}>

    {evolution.map(Pokemon => <PokemonDetail history={history}  pokemon={Pokemon}/>)}
  </ul>
  </>
  );
}