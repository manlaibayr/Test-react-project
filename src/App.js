import React, { Component } from "react";
import Person from "./components/person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 27
      },
      {
        name: "Sam",
        age: 25
      },
      {
        name: "Tom",
        age: 20
      }
    ]
  };

  setName = () => {
    this.setState({
      persons: [
        {
          name: "Max",
          age: 20
        },
        {
          name: "Sam",
          age: 25
        },
        {
          name: "Tom",
          age: 20
        }
      ]
    });
  };

  nameChange = event => {
    this.setState({
      persons: [
        {
          name: "Max",
          age: 25
        },
        {
          name: "Sam",
          age: 26
        },
        {
          name: event.target.value,
          age: 27
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <h1>Hello i am React App</h1>
        <button onClick={this.setName}>Click me</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          change={this.nameChange}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.nameChange}
          click={this.setName}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          change={this.nameChange}
        />
      </div>
    );
  }
}

export default App;
