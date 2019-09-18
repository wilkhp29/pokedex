import React,{useEffect,useState} from 'react';

import { Container } from './styles';

export default function Header({nome}) {
    
   function handlerExit() {
       alert("sair")
       
   }

  return (
    <Container nome={nome}>
        <h1>Pokédex</h1>
        {nome && (
        <div>
            <span>{{ nome }}</span>
            <button onClick={() => handlerExit()}>Sair</button>
        </div>)
        }
    </Container>
  );
}
