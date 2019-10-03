import React from 'react';
import { mount } from 'enzyme';
import Busca from '../../src/Views/busca';

import { Provider } from "react-redux";
import {store} from "../mock";


describe('Buscar', () => {
    it('renderizando a Busca', () => {
      const wrapper = mount(
        <Provider store={store}>
            <Busca />
        </Provider>,{context:{store}});
    
        expect(wrapper).toMatchSnapshot();
    });
})
