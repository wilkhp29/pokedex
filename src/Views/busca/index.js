import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import { Container, Form , PokemonConteiner } from './styles';
import Pokemon from "../../Components/pokemon";
const Busca = ({history}) => {
    const dispatch = useDispatch();
    const busca = useSelector((state) => state.pokemon.busca);
    const loading = useSelector((state) => state.pokemon.loading);
    const pokemon = useSelector((state) => state.pokemon.pokemonBusca);
    
    
  function buscar(e){
    e.preventDefault();
    dispatch({type:'ASYNC_GET_POKEMON',busca})
  };

  function rende() {
    const render = pokemon.id ?  (  
      <Pokemon history={history} pokemon={pokemon}/>
    ) :  (<div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}><h2>Pokemon Não Encontrado.</h2></div>); 
    return render;
  }



  return (
    <Container>
      <div style={{flex:1,marginBottom:10,width:'100%'}}>
        <button style={{borderRadius:5,marginRight:10,padding:10,background:'#fc6963',color:'#fff'}} onClick={(e) => history.push("/app")}>
        volta
        </button>
      </div>
      <Form onSubmit={buscar} >
     
        <input
          type="text"
          placeholder="Buscar Pokemon por Nome ou Numero"
          value={busca}
          onChange={e =>  dispatch({type:'ESCREVENDO',text:e.target.value})}
        />
        <button type="submit">
          Buscar
        </button>
      </Form>

    
          {loading ? (
          <div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center',background:"#fff",felx:1}}>
              <h1>Carregando Aguarde ...</h1>
          </div>) : 
          rende()
          }        

    </Container>
  );
}

export default Busca;