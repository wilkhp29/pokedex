import React,{useState,useEffect} from 'react';
import { Container } from './styles';
import { logout,isAuthenticated } from "../../services/auth";
export default function Header({location}) {
    const [logado,setLogado] = useState(isAuthenticated);
   function handlerExit() {
      logout();
      window.location.href  = "/";
   }

   useEffect(() => {
     setInterval(() => setLogado(isAuthenticated),1000);
   },[])
   
   
  return (
    <Container >
        <a href="/app">
        <h1>Pokédex</h1>
        </a>
       {logado && <button onClick={() => handlerExit()}>Sair</button> }
    </Container>
  );
}
