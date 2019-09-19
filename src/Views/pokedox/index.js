import React,{useState} from 'react';
import {useSelector} from "react-redux";
import Pokemon from "../../Components/pokemon";
import { Container,Form,ButtonFloat } from './styles';

const Pokedex = ({history}) => {
    const pokemons = useSelector((state) => state.pokedex);
    const [filtro,setFiltro] = useState("");
    
  return (
    <>
    <Container>
      <Form>
        <input
          type="text"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Filtra Seus Pokemons"
        />
        <button onClick={() =>{}}>
          filtra
        </button>
      </Form>
    <ul>
       {pokemons.filter(poke => poke.name.includes(filtro)).map((pokemon) => <Pokemon history={history} key={pokemon.id} pokemon={pokemon}/>)}
    </ul>
    </Container>
    <ButtonFloat onClick={() => history.push("/busca")}>Buscar</ButtonFloat>
    </>
  );
}

export default Pokedex;