import React from 'react';
import { shallow } from 'enzyme';
import Detalhes from '../Views/detalhe';

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

const initalState = {
    pokedox:[],
    pokemon:{busca:'',pokemon:{},loading:false,pokemonBusca:{}}
}

const store = mockStore(initalState);

it('renderizando a Detalhes', () => {
    const wrapper = shallow(
    <Provider store={store}>
        <Detalhes />
    </Provider>
        ,{context:{store}});

    expect(wrapper).toMatchSnapshot();
});