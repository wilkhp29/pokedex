import React from 'react';
import { shallow } from 'enzyme';
import Pokedex from '../../src/Views/pokedox';



jest.mock('react-redux', () => {
  const {initalState} = require("../mock");
  
   return {useSelector: jest.fn(fn => fn(initalState))}
});


describe('pokedex', () => {
    it('renderizando a Pokedex', () => {
        const wrapper = shallow(
            <Pokedex />
        );
    
        expect(wrapper).toMatchSnapshot();
    });
})
