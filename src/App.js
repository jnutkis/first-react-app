import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Bio from './Person/James';
import { UserInput, UserOutput } from './Components/User/User';

class App extends Component {
  state = {
    persons: [
      { name: 'James', age: 29 },
      { name: 'Mouna', age: 24 },
      { name: 'Random', age: 20 }
    ],
    username: 'james.nutkis@gmail.com',
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log('Was Clicked!');
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'James', age: 29 },
        { name: 'Random', age: 20 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'James', age: 29 },
        { name: 'Mouna', age: 24 },
        { name: event.target.value, age: 20 }
      ]
    });
  };

  changeNameHandler = name => {
    this.setState({
      username: name
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  changeNameInput = event => {
    this.setState({
      username: event.target.value
    });
  };
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const userOutput = {
      color: 'red'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Mouna!')}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {/* Conditional People */}
        {/* {this.state.showPersons ? ( */}
        {persons}
        {/* ) : null} */}
        <Bio
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <UserOutput p1="James" p2="Nutkis" />
        <UserOutput p1="Mouna" p2="El Jazouli" />
        <UserOutput
          p1={this.state.username}
          p2="Notta"
          click={this.changeNameHandler.bind(this, 'mounaeljazouli@gmail.com')}
          style={userOutput}
        />
        <UserInput
          username={this.state.username}
          changed={this.changeNameInput}
        />
      </div>
    );

    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'Does this work now?')
    // );
  }
}

export default App;
