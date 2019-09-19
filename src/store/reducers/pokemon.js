export default function pokemon(state = {busca:'',pokemon:{},loading:false,pokemonBusca:{}}, action) {
    switch (action.type) {
      case "ESCREVENDO":
        return {busca:action.text,pokemonBusca:{},pokemon:state.pokemon,loading:false};
      case "BUSCANDO":
        return {busca:'',pokemonBusca:{},pokemon:state.pokemon,loading:true};
      case "NENHUMRESULTADO":
          return {busca:'',pokemonBusca:{},pokemon:{},loading:false};
      case "ADD_POKEMON":
        return {busca:'',pokemonBusca:{},pokemon:action.pokemon,loading:false};
      case "ADD_BUSCA":
        return {busca:'',pokemon:{},pokemonBusca:action.pokemon,loading:false};
      default:
        return state;
    }
  }