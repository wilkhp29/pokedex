import React from 'react';
import { shallow } from 'enzyme';
import Pokedex from '../Views/pokedox';

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

const initalState = {
    pokedox:[],
    pokemon:{busca:'',pokemon:{},loading:false,pokemonBusca:{}}
}

const store = mockStore(initalState);

it('renderizando a Pokedex', () => {
    const wrapper = shallow(
    <Provider store={store}>
        <Pokedex />
    </Provider>
        ,{context:{store}});

    expect(wrapper).toMatchSnapshot();
});