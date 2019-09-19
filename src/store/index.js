import { createStore , applyMiddleware } from "redux";
import { persistStore , persistReducer } from  "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import sagas from "./sagas";



const persistConfig = {
    key:"pokedex",
    storage
};

const sagaMiddleware = createSagaMiddleware();

const persistReducers = persistReducer(persistConfig,rootReducer);

const store  = createStore(persistReducers,applyMiddleware(sagaMiddleware));
const persisto = persistStore(store);

sagaMiddleware.run(sagas);

export  {store,persisto};