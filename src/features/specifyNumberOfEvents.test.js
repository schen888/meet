import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn\'t specified a number, 32 is the default number.', ({ given, when, then }) => {
      given('the user did not specify a number', () => {});

      let AppWrapper;
      when('the event list opens', () => {
        AppWrapper = mount(<App />);
      });

      then('Maximun 32 events will be shown in the list in one page', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
      });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
      let AppWrapper;
      let NumberOfEventWrapper;
      given('the user specified the number',  () => {
        AppWrapper= mount(<App />);
        NumberOfEventWrapper=AppWrapper.find(NumberOfEvents);
        const eventObject={target: {value: 1}};
        NumberOfEventWrapper.find('input.number').simulate('change', eventObject);
      });

      when('event list opens', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.EventList')).toHaveLength(1);
      });

      then('the specified number of events max. will be shown in the list in one page', () => {
        expect(AppWrapper.find('.EventList li')).toHaveLength(1);
      });
  });
});