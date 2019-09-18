import React, {useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { Link } from "react-router-dom";

import { Container } from './styles';

export default function Detalhes({pokemon}) {
  const dispatch = useDispatch();
  const [img,setImg] = useState(pokemon.sprites.front_default)
 // const dados = useSelector((state) => state.pokedex.map((item) => item.id == pokemon.id));

  function onChangeHandler(event){
   pokemon.sprites.front_default =  URL.createObjectURL(event.target.files[0]);
   setImg(URL.createObjectURL(event.target.files[0]));
  }

  function handlerCapturar(){
    dispatch({type:'ADD_POKEMON',payload:pokemon});
  }

  return (
    <Container >
      <div>
    <h2>Nome: {pokemon.name} Nº{pokemon.id}</h2>
    <h3>Weight: {pokemon.weight} Height: {pokemon.height}</h3>
    <div>
        <input type="file" name="file" onChange={onChangeHandler}/>
        <img src={img} width={200}/>
            {pokemon.types.map((tipos,index) => <Link to={`/list/${tipos.type.name}`}>{tipos.type.name}</Link>)}
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
          <td>Attack:</td>
          <td>{pokemon.stats[4].base_stat}</td>
        </tr>
        <tr>
          <td>Defense:</td>
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
          <td>Speed:</td>
          <td>{pokemon.stats[0].base_stat}</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>Habilidades</th>
        </tr>
        {pokemon.abilities.map((habilidade,index) => <tr key={index}><td>{habilidade.ability.name}</td></tr>)}
      </table>
      <button onClick={() =>handlerCapturar()}>
        Capturar
      </button>
      </div>
    </Container>
  );
}