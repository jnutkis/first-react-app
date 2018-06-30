import React from 'react';
import './Person.css';

let person = props => {
  const style = {
    background: 'red',
    color: 'white'
  };
  return (
    <div style={style} className="person Person" onClick={props.click}>
      <div>
        <small>Index: {props.index}</small>
      </div>
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
