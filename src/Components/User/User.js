import React from 'react';
import './User.css';

const userInput = props => {
  return (
    <div className="userInput">
      <input type="text" value={props.username} onChange={props.changed} />
    </div>
  );
};

const userOutput = props => {
  return (
    <div style={props.style}>
      <p>{props.p1}</p>
      <p>{props.p2}</p>
      <button onClick={props.click}>Change Me</button>
    </div>
  );
};

export { userInput as UserInput, userOutput as UserOutput };
