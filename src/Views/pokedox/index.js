import React,{ useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";

import { Container,Form } from './styles';

const Pokedex = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => {
      console.log(state.pokedex);
      return state.pokedex});
    
  useEffect(() => {
    
  });

  return (
    <Container>
      <Form>
        <input
          type="text"
          placeholder="Filtra Seus Pokemons"
        />
        <button onClick={() =>{}}>
          Buscar
        </button>
      </Form>
    </Container>
  );
}

export default Pokedex;