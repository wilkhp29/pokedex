import React from 'react';
import { shallow } from 'enzyme';
import Lista from '../Views/list';

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

const initalState = {
    pokedox:[],
    pokemon:{busca:'',pokemon:{},loading:false,pokemonBusca:{}}
}

const store = mockStore(initalState);

it('renderizando a Lista', () => {
    const wrapper = shallow(
    <Provider store={store}>
        <Lista />
    </Provider>
        ,{context:{store}});

    expect(wrapper).toMatchSnapshot();
});