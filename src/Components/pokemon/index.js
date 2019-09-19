import React from 'react';
import { Container } from './styles';
import {useDispatch} from "react-redux";


export default function Pokemon({pokemon,history}) {
  const dispatch = useDispatch();

  function setPokemon(){
    dispatch({type:"ADD_POKEMON",pokemon});
    history.push("/detalhes");
  }
 
  return (
      <Container onClick={() => setPokemon()}>
        <header>
            <span>{pokemon.id} - {pokemon.name}</span>
            <img src={`https://www.serebii.net/pokedex-sm/icon/${pokemon.id < 100 ? pokemon.id < 10 ? '00' + pokemon.id : '0' + pokemon.id : pokemon.id }.png`} />
        </header>
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
        </div>
    </Container>
  );
}
