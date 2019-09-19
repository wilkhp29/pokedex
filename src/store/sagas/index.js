import { takeLatest , call , put } from "redux-saga/effects";
import api from "../../services/api";

function* asyncGetPokemon({busca}){    
    try {
        yield put({type:'BUSCANDO'});
        const {data:pokemon} = yield call(api.get,`pokemon/${busca}`);
      
        yield put({type:'ADD_BUSCA',pokemon});
        
    } catch (error) {
        yield put({type:'NENHUMRESULTADO'});
        
    }
}


export default function* root(){
   yield takeLatest("ASYNC_GET_POKEMON",asyncGetPokemon)
} 