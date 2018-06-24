import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Bio from './Person/James';
import { UserInput, UserOutput } from './Components/User/User';

class App extends Component {
  //The State
  state = {
    persons: [
      { id: 4234, name: 'James', age: 29 },
      { id: 234234, name: 'Mouna', age: 24 },
      { id: 23342, name: 'Blah', age: 20 }
    ],
    username: 'james.nutkis@gmail.com',
    showPersons: false
  };
  //

  //Methods
  // switchNameHandler = newName => {
  //   // console.log('Was Clicked!');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 24 },
  //       { name: 'James', age: 29 },
  //       { name: 'Random', age: 20 }
  //     ]
  //   });
  // };

  nameChangedHandler = (event, id) => {
    //Finds Index in Array of the ID Parameter
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //Returns the Object found in ID
    const person = {
      ...this.state.persons[personIndex]
    };

    //Sets the name to the Update Value from the Input
    person.name = event.target.value;

    //Grab existing Persons Array
    const persons = [...this.state.persons];

    //Update the Object in Array at the ID Index to the new value based off Input
    persons[personIndex] = person;

    //Update original state with input
    this.setState({
      persons: persons
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

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  //Render and Vars
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={index}
                changed={event => this.nameChangedHandler(event, person.id)}
                index={index + 1}
                click={this.deletePersonHandler.bind(this, index)}
              />
            );
          })}
          {/* <Person
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
          /> */}
        </div>
      );
    }

    let bio = null;
    if (this.state.persons[0]) {
      bio = (
        <Bio
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
      );
    }

    //

    //Render the JSX
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle People
        </button>
        {/* Conditional People */}
        {/* {this.state.showPersons ? ( */}
        {persons}
        {/* ) : null} */}
        {bio}
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
