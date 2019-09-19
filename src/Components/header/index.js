import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import { Container } from './styles';
import { logout } from "../../services/auth";
export default function Header({location}) {
    
   function handlerExit() {
      logout();
      window.location.href  = "/";
   }

  return (
    <Container >
        <a href="/app">
        <h1>Pokédex</h1>
        </a>
       
            <button onClick={() => handlerExit()}>Sair</button>
    </Container>
  );
}
