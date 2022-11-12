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
    return <div className="Event">
      <div className="summary">{event.summary}</div>
      <div className="start-time">{`${event.start.dateTime} (${event.start.timeZone})`}</div>
      {this.state.detailsHidden=true}
      ? <button type="button" className="show-details" onClick={this.onClickedShowDetails}></button>
      : (<div className="about-event">
          <a className="link-to-google" href={event.htmlLink}></a>
          <div className="description">{event.description}</div>
          <button className="hide-details" type="button" onClick={this.onClickedHideDetails}></button>
        </div>)
    </div>;
  }
}
export default Event;