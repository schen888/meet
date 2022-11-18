import React, { Component } from 'react';
import './App.css';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import { getEvents, extractLocations } from './api';

class App extends Component {
  state ={
    events: [],
    locations: [],
    seletedLocation: 'all',
    eventCount: 32
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, inputNumber) => {
    const {eventCount, seletedLocation} = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
        const eventsToShow=locationEvents.slice(0, eventCount);
        this.setState({
        events: eventsToShow,
        seletedLocation: location
        });
      });  
    } else {
      getEvents().then((events) => {
        const locationEvents = (seletedLocation === 'all') ?
        events :
        events.filter((event) => event.location === seletedLocation);
        const eventsToShow=locationEvents.slice(0, inputNumber);
        this.setState({
          events: eventsToShow,
          eventCount: inputNumber
        });
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Meet App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <NumberOfEvents updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;