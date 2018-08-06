import React, {Component} from 'react';

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <h1>Calendar Heading {this.props.name}</h1>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
    );
  }
}

export default Calendar;
