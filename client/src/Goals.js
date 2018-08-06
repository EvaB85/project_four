import React, {Component} from 'react';

class Goals extends Component {
  render() {
    return (
      <div className="Goal">
        <h1>Goal Heading {this.props.name}</h1>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
    );
  }
}

export default Goals;
