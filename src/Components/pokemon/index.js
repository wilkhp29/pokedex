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
    <ul className="results"><li className="animating">
    <figure>
    
            <img src={pokemon.sprites.front_default} width={96} height={96} />
    
    </figure>
    
    <div className="pokemon-info">
        <p className="id">
            <span className="number-prefix">Nº</span>{pokemon.id}
        </p>
        <h5>{pokemon.name}</h5>
        {pokemon.types.map((tipo) =>(
  <div className="abilities">
  <span className={`pill background-color-${tipo.type.name}`} >{tipo.type.name.toUpperCase()}</span>
</div>
        ))}
          
    </div>
    </li>
    </ul>
    </Container>
  );
}
