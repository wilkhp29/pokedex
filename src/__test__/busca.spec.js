import React from 'react';
import { shallow } from 'enzyme';
import Busca from '../Views/busca';

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

const initalState = {
    pokedox:[],
    pokemon:{busca:'',pokemon:{},loading:false,pokemonBusca:{}}
}

const store = mockStore(initalState);

it('renderizando a Busca', () => {
  const wrapper = shallow(
    <Provider store={store}>
        <Busca />
    </Provider>     ,{context:{store}});

    expect(wrapper).toMatchSnapshot();
});