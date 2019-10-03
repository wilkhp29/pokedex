import React from 'react';
import { mount } from 'enzyme';
import Lista from '../../src/Views/list';

import { Provider } from "react-redux";
import {store} from "../mock";



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