import React,{useEffect,useState} from 'react';

import api from "../../services/api";
import Pokemon from "../../Components/pokemon";
import {Container} from "./styles";


export default function List({match, history }) {
    const [pokemons,setPokemons] = useState([]);
    const [loading,setLoading] = useState(false);
   

    useEffect(()=>{
        async function getPokemon(){
          setLoading(true);
           const {data} = await api.get(`type/${match.params.name}`);
          
          const list  = data.pokemon.map(async ({pokemon}) => {
             const response = await api.get(`pokemon/${pokemon.name}`);
          
            return response.data;
          });
             
           const dados = await Promise.all(list);
           setPokemons(dados);
           setLoading(false);
           }
           
        
        getPokemon();
    },[match.params.name])
      
   


  return (
    <>
      <button style={{borderRadius:5,marginRight:10,padding:10,background:'#fc6963',color:'#fff'}} onClick={(e) => history.goBack()}>
         Voltar
        </button>
{loading ? (
<h1 style={{felx:1,justifyContent:"center",alignItems:"center",textAlign:"center",background:"#fff"}}>Carregando lista ...</h1>
):(
   <Container>
       {pokemons.map((pokemon) => <Pokemon history={history} key={pokemon.id} pokemon={pokemon}/>)}
   </Container>

)}
   </>
  );
}
