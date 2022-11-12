import React, { Component } from 'react';

class NumberOfEvents extends Component {
  
  state = {
    inputNr: 32
  }

  handleInputChanged = (e)=>{
    this.setState({
      inputNr: e.target.value
    })
  }

  render() {
    return (
      <div className='NumberOfEvents'>
        <input 
          type="text"
          className="number"
          value={this.state.inputNr}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;