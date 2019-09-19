export default function pokedex(state = [], action) {
    switch (action.type) {
      case "ADD_POKEDEX":
        let newState = state.filter(pokemon => {
          if(pokemon.id !== action.pokemon.id){
             return pokemon;
          }}); 

        return [...newState,action.pokemon]
          case "DELETE_POKEDEX":
              return [...state,action.pokemon].filter(pokemon => {
                if(pokemon.id !== action.pokemon.id){
                   return pokemon;
                }});
      
      default:
        return state;
    }
  }