import React, { Component } from "react";

class Event extends Component {

  state ={
    detailsHidden: true
  }

  onClickedShowDetails = () => {
    this.setState({detailsHidden: false})
  }

  onClickedHideDetails = () => {
    this.setState({detailsHidden: true})
  }

  render() {
    const { event } = this.props;

    return (
      <div className="Event">
        <h2 className="summary">{event.summary}</h2>
        <div className="start-time">{`${event.start.dateTime} (${event.start.timeZone})`}</div>
        {this.state.detailsHidden===true
        ? <button type="button" className="show-details" onClick={this.onClickedShowDetails}>Show details</button>
        : (<div className="about-event">
            <a className="link-to-google" href={event.htmlLink}>See details on Google Calendar</a>
            <div className="description">{event.description}</div>
            <button className="hide-details" type="button" onClick={this.onClickedHideDetails}>Hide details</button>
          </div>)}
      </div>
    );
  }
}
export default Event;