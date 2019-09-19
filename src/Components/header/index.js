import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import { Container } from './styles';

export default function Header({nome}) {
    
   function handlerExit() {
       alert("sair")
       
   }

  return (
    <Container nome={nome}>
        <a href="/app">
        <h1>Pokédex</h1>
        </a>
        {nome && (
        <div>
            <span>{{ nome }}</span>
            <button onClick={() => handlerExit()}>Sair</button>
        </div>)
        }
    </Container>
  );
}
