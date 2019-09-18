import { takeLatest , call , put } from "redux-saga/effects";
import api from "../../services/api";
import chamada from "axios";

function* asyncGetPokemon({busca}){    
    try {
        yield put({type:'BUSCANDO'});
        const {data:pokemon} = yield call(api.get,`pokemon/${busca}`);
        const {data:pokemonSpecies} = yield call(api.get,`pokemon-species/${busca}`);
        const {data:pokemonEvolution} = yield call(chamada.get,`${pokemonSpecies.evolution_chain.url}`);

        yield put({type:'ADD_POKEMON',pokemon:{...pokemon,evolucao:pokemonEvolution}});
        
    } catch (error) {
        yield put({type:'NENHUMRESULTADO'});
        
    }
}


export default function* root(){
   yield takeLatest("ASYNC_GET_POKEMON",asyncGetPokemon)
} 