import React from 'react';
import { Container } from './styles';
import {useSelector} from "react-redux";
import Detalhes from "../../Components/detalhes";

export default function Detalhe({history}) {
  const pokemon = useSelector((state) => state.pokemon.pokemon);
  return (
    <>
    <div style={{flex:1,marginBottom:10,width:'100%'}}>
    <button style={{borderRadius:5,marginRight:10,padding:10,background:'#fc6963',color:'#fff'}} onClick={(e) => history.push("/app")}>
     volta
  </button>
</div>
    <Container >
      <div>
      <Detalhes history={history} pokemon={pokemon} />
      </div>
    </Container>
    </>
  );
}
