import * as React from 'react';
import { shallow } from 'enzyme';
import Detalhes from '../../src/Views/detalhe';


jest.mock('react-redux', () => {
  const {initalState} = require("../mock");
  
   return {useSelector: jest.fn(fn => fn(initalState))}
});


describe('Detalhes', () => {
    it('renderizando a Detalhes', () => {
        const wrapper = shallow(
            <Detalhes />
        );
        expect(wrapper).toMatchSnapshot();
    });
});


