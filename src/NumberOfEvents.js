import React, { Component } from 'react';
import {ErrorAlert} from './Alert';

class NumberOfEvents extends Component {

  state={
    eventCount: 32,
    infoText: ''
  }

  handleInputChanged = (e)=>{
    const inputValue=e.target.value;
    
    if (inputValue<1 || inputValue>32) {
      this.setState({
        infoText: 'Please select number from 1 to 32'
      })
      
    } else {
      this.props.updateEvents(null, inputValue);
      this.setState({
        eventCount: inputValue,
        infoText:''
      })
    }
  }

  render() {
    return (
      <div className='NumberOfEvents'>
        <label for="number-of-events">Number of Events: </label>
        <input 
          type="number"
          id="number-of-events"
          className="number"
          min="1"
          value={this.state.eventCount}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.infoText}/>
      </div>
    );
  }
}

export default NumberOfEvents;