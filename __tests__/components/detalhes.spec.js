import React from 'react';
import { shallow } from 'enzyme';
import Pokemon from '../../src/Components/pokemon';
import {initalState as state} from "../mock";


jest.mock('react-redux', () => {
  const {initalState} = require("../mock");
  
   return {
        useSelector: jest.fn(fn => fn(initalState)),
        useDispatch: () => {}
    }
});


describe('pokedex', () => {
    it('renderizando  componente detalhes', () => {
        const wrapper = shallow(
            <Pokemon pokemon={state.pokemon.pokemon} />
        );
    
        expect(wrapper).toMatchSnapshot();
        wrapper.find("span").equals("25 - pikachu");
    });
})
