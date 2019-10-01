import React from 'react';
import { mount } from 'enzyme';
import Lista from '../src/Views/list';

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

const initalState = {
    pokedox:[],
    pokemon:{busca:'',pokemon:{},loading:false,pokemonBusca:{}}
}

const store = mockStore(initalState);

describe('lista', () => {
    it('renderizando a Lista', () => {
        const wrapper = mount(
        <Provider store={store}>
            <Lista match={{params:{name:"fire"}}}/>
        </Provider>
            ,{context:{store}});
    
        expect(wrapper).toMatchSnapshot();
    });
})