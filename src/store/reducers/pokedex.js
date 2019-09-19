export default function pokedex(state = [], action) {
    switch (action.type) {
      case "ADD_POKEDEX":
        return [...state,action.payload];
      default:
        return state;
    }
  }