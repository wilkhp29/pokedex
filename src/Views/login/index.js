import React,{ useState } from 'react';
import { Container,Form } from './styles';
import { login } from "../../services/auth";

export default function Login({history}) {
    const [user,setUser] = useState("");
    const [error,setError] = useState("");


   function handleSignUp(e ) {
        e.preventDefault();
        if(!user){
            setError("Preencha Seu Nome para continuar!" )
        }
        login(user);
        history.push("/app");
      };

  return (
    <Container>
    <Form onSubmit={handleSignUp}>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Insira Seu nome"
        onChange={e => setUser(e.target.value)}
      />
      <button type="submit">Entrar</button>
      <hr />
    </Form>
  </Container>
  );
}
