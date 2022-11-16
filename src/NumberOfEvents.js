import React, { Component } from 'react';


class NumberOfEvents extends Component {

  state={
    eventCount: 32
  }

  handleInputChanged = (e)=>{
    const inputValue=e.target.value;
    
    if (inputValue<1) {
      alert('Please select a number from 1 to 32.');
    } else {
      this.props.updateEvents(null, inputValue);
      this.setState({
        eventCount: inputValue
      })
    }
  }

  render() {
    return (
      <div className='NumberOfEvents'>
        <label>Number of Events: </label> 
        <input 
          type="number"
          className="number"
          value={this.state.eventCount}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;