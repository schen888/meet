import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render NumberOfEvents element', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('input.number')).toHaveLength(1);
    expect(NumberOfEventsWrapper.find('label')).toHaveLength(1);
  });

  /* test('render default input no. 32',()=>{
    expect(NumberOfEventsWrapper.state('inputNr')).toBe(32);
    expect(NumberOfEventsWrapper.find('input.number').prop('value')).toBe(32);
  });

  test('inputNr matches the inputed value', ()=>{
    NumberOfEventsWrapper.setState({inputNr: 32});
    NumberOfEventsWrapper.find('input.number').simulate('change', {target: {value: 20}});
    expect(NumberOfEventsWrapper.state('inputNr')).toBe(20);
  }); */
})