import React from 'react';
import { Board } from './board';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board tasks={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('create new task input', () => {
  test('it changes the internal state', () => {
    const value = 'hola'
    const wrapper = shallow(<Board tasks={[]} />);
    expect(wrapper.state('newTaskText')).toBe('');

    wrapper.find('[type="text"]').simulate('change', {target: {value}})
    expect(wrapper.state('newTaskText')).toBe(value);
  });



});
