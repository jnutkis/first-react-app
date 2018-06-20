import React, { Component } from 'react';
import './Person.css';
const person = props => {
  return (
    <div className="person Person" onClick={props.click}>
      <p>My name is {props.name}</p>
      <p>I am {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

// class Test extends Component {
//   render() {
//     return (
//       <div>
//         <p>Ignore, just test</p>
//         <p>{this.props.children}</p>
//       </div>
//     );
//   }
// }

export { person as default };
