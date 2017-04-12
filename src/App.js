// bring in react & component instance
import React, { Component } from 'react';

// Component definition
class Hello extends Component {

  // when our component is initialized,
  // our constructor function is called
  constructor(props) {
    // make a call to the parent class's
    // comonent constructor
    super(props);

    // define an initial state
    this.state = {
      counter: 0, // initialize counter to be 0
      newName: '',
    };
  }

  handleClick = () => {
    console.log('you clicked me');
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  handleReset = () => {
    console.log('reset');
    this.setState({
      counter: 0,
    })
  }

  handleChangeName = (e) => {
    console.log('change name');
    this.setState({
      newName: e.target.value,
    })
  }

  // the comp will render this
  render() {

    // must return some UI
    return (
      <div>
        <h1>O Hai {this.state.newName || this.props.name}!</h1>
        <p className="awesome-sauce" >You are {this.props.age} years old</p>

        <p>The count is {this.state.counter}</p>

        <button onClick={this.handleClick}>Click me</button>
        <button
          onClick={this.handleReset}
          style={{ marginLeft: '16px', marginRight: '16px' }}
        >
          Reset
        </button>
        <input onChange={(e) => this.handleChangeName(e)}/>
      </div>
    );
  }
}

export default Hello;
