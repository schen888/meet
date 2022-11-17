import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test=>{
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppWrapper;
    given('the list of events was open', () => {
      AppWrapper = mount(<App />);
    });

    when('the user scrolls through the list', () => {});

    then('the details of events should be hidden', () => {
      AppWrapper.update();
      const events=AppWrapper.state('events');
      events.map((event)=>{
        let EventWrapper = shallow(<Event event={event} />);
        expect(EventWrapper.state('detailsHidden')).toBe(true);
      })  
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
      let AppWrapper;
      given('the list of events was open', async () => {
        AppWrapper=await mount(<App />);
        AppWrapper.update();
        expect(AppWrapper.find('.EventList li')).toHaveLength(mockData.length);
      });

      when('the user click on one event (or show button)', () => {
        AppWrapper.find('.Event .show-details').at(0).simulate('click');
      });

      then('detailed info of that event should be shown to the user', () => {
        expect(AppWrapper.find('.Event .about-event').at(0)).toHaveLength(1);
      });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
      let AppWrapper;
      given('the detailed info has been shown to the user', async () => {
        AppWrapper=await mount(<App />);
        AppWrapper.update();
        AppWrapper.find('.Event .show-details').at(0).simulate('click');
      });

      when('the user click on the hide button', () => {
        AppWrapper.find('.Event .hide-details').at(0).simulate('click');
      });

      then('the detailed info of that even should be hidden', () => {
        expect(AppWrapper.find('.Event .about-event').at(0)).toHaveLength(0);
      });
    });
});