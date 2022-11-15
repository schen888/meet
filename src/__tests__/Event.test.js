import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(()=>{
    event=mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  })
  
  test('render Event element', () => {
    expect(EventWrapper.find('.Event')).toHaveLength(1);
  });

  test('render event summary element', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render correct event summary', () => {
    expect(EventWrapper.find('.summary').text()).toBe(event.summary);
  });

  test('render start time element', () => {
    expect(EventWrapper.find('.start-time')).toHaveLength(1);
  });

  test('render correct start time', () => {
    expect(EventWrapper.find('.start-time').text()).toBe(`${event.start.dateTime} (${event.start.timeZone})`);
  });

  test('render "show-details" button', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('render event details', () => {
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('detailsHidden')).toBe(false);
    expect(EventWrapper.find('.about-event')).toHaveLength(1);
    expect(EventWrapper.find('.link-to-google')).toHaveLength(1);
    expect(EventWrapper.find('.link-to-google').prop('href')).toBe(event.htmlLink);
    expect(EventWrapper.find('.description')).toHaveLength(1);
    expect(EventWrapper.find('.description').text()).toBe(event.description);
    expect(EventWrapper.find('.hide-details')).toHaveLength(1);
  });

  test('render hide event details', () => {
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.state('detailsHidden')).toBe(true);
    expect(EventWrapper.find('.about-event')).toHaveLength(0);
    expect(EventWrapper.find('button.show-details')).toHaveLength(1);
  });

});


