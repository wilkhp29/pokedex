import React,{ useEffect } from 'react';
import {useDispatch} from "react-redux";

import { Container,Form } from './styles';

const Pokedex = () => {
    const dispatch = useDispatch();

    
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