import React from 'react';
import { Task } from './task';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Task data={{ text: 'aprender TDD' }} dispatch={console.log} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('snapshot match', () => {
  test('it should keep consistent', () => {
    const text = 'aprender TDD';
    const wrapper = shallow(<Task data={{ text }} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('dinamic tests', () => {
  test('it should show the text in .text', () => {
    const text = 'aprender TDD';
    const wrapper = shallow(<Task data={{ text }} />);
    expect(wrapper.find('.text').text()).toBe(text);
  });
  test('it should have completed class', () => {
    const wrapper = shallow(<Task data={{ completed: true }} />);
    expect(wrapper.find('.completed').length).toBe(1);
  });
  test("it shouldn't have completed class", () => {
    const wrapper = shallow(<Task data={{ completed: false }} />);
    expect(wrapper.find('.completed').length).toBe(0);
  });
  test('it should run prop delete', () => {
    const id = 99;
    const onDeleted = jest.fn();
    const onCompleted = jest.fn();
    const wrapper = shallow(<Task data={{ text: 'hola', id }} delete={onDeleted} complete={onCompleted} />);
    wrapper.find('.delete').simulate('click');
    expect(onDeleted).toBeCalledWith(id);
    expect(onCompleted).not.toBeCalledWith(id);
  });
  test('it should run prop complete', () => {
    const id = 99;
    const onDeleted = jest.fn();
    const onCompleted = jest.fn();
    const wrapper = shallow(<Task data={{ text: 'hola', id }} delete={onDeleted} complete={onCompleted} />);
    wrapper.find('.complete').simulate('click');
    expect(onCompleted).toBeCalledWith(id);
    expect(onDeleted).not.toBeCalledWith(id);
  });
});
