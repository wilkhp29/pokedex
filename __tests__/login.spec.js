import React from 'react';
import { shallow } from 'enzyme';
import Login from '../src/Views/login';

it('renderizando a Login', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
});