import React, { Component } from 'react';

class Bio extends Component {
  state = {
    name: 'James',
    details: 'Sup'
  };

  changeHandler = () => {
    this.setState({
      name: 'Mouna'
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.changeHandler}>Click Me!</button>
        <h1>{this.state.name}</h1>
        <p>{this.props.age}</p>
        <p>{this.state.details}</p>
      </div>
    );
  }
}

export { Bio as default };
