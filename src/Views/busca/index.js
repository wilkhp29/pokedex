import React,{ useEffect,useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { Container, Form , PokemonConteiner,Row } from './styles';

const Busca = ({history}) => {
    const dispatch = useDispatch();
    const busca = useSelector((state) => state.pokemon.busca);
    const loading = useSelector((state) => state.pokemon.loading);
    const pokemon = useSelector((state) => state.pokemon.pokemon);
    
    
  function buscar(e){
    e.preventDefault();
    dispatch({type:'ASYNC_GET_POKEMON',busca})
  };

  function rende() {
    const rende = pokemon.id ?  (
   <>
   <Row>
      <img src={pokemon.sprites.front_default}  />
      <div>
        <text>Nome:{pokemon.name}</text>
        <text>Altura:{pokemon.height}</text>
        <text>Peso:{pokemon.weight}</text>
      </div>
     <div>
       <text>Hp:{pokemon.stats[5].base_stat}</text>
       <text>Ataque:{pokemon.stats[4].base_stat}</text>
       <text>Defesa:{pokemon.stats[3].base_stat}</text>
     </div>
 <div>
   <text>Velocidade:{pokemon.stats[0].base_stat}</text>
   <text>Tipos:{pokemon.types.map(item => (item.type.name+","))}</text>
 </div>
</Row>
<Row>
      <div>
        <h3>Habilidade</h3>
          <ul>
            {pokemon.abilities.map((item,index) => (<li key={index}>{item.ability.name}</li>))}
          </ul>
      </div>

</Row>
</>
    ) :  (<div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}><h2>Pokemon Não Encontrado.</h2></div>); 
    return rende;
  }

  function _handleKeyDown(e) {
    e.preventDefault();
    if (e.key === 'Enter') {
     buscar(e);
    }
  }

  return (
    <Container>
      <div style={{flex:1,marginBottom:10,width:'100%'}}>
        <button style={{borderRadius:5,marginRight:10,padding:10,background:'#fc6963',color:'#fff'}} onClick={(e) => history.push("/app")}>
          Meu Pokedéx
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

      <PokemonConteiner>
          {loading ? (
          <div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
              <h1>Carregando Aguarde ...</h1>
          </div>) : 
          rende()
          }        
      </PokemonConteiner>
    </Container>
  );
}

export default Busca;