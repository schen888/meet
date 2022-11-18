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
})