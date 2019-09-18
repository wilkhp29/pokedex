export default function pokemon(state = {busca:'',pokemon:{},loading:false}, action) {
    switch (action.type) {
      case "ESCREVENDO":
        return {busca:action.text,pokemon:state.pokemon,loading:false};
      case "BUSCANDO":
        return {busca:'',pokemon:state.pokemon,loading:true};
      case "NENHUMRESULTADO":
          return {busca:'',pokemon:{},loading:false};
      case "ADD_POKEMON":
        return {busca:'',pokemon:action.pokemon,loading:false};        
      default:
        return state;
    }
  }