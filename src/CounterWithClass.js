import React, { Component } from 'react';

let sint;

class CounterWithClass extends Component {
  state = {
    currentValue: 0,
    title: '',
  }

  increase() {
    this.setState({
      currentValue: this.state.currentValue + 1,
    });
  }

  updateTitle() {
    this.setState({
      title: 'Current value is ' + this.state.currentValue
    });
  }

  componentDidMount() {
    this.setState({
      currentValue: this.props.start
    });

    sint = setInterval(() => {
      this.increase();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(sint);
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.currentValue}</p>
        <button
         onClick={() => this.increase()}>
           increase counter
        </button>
        <button
          onClick={() => this.updateTitle()}>
            Show title
        </button>
      </div>
    )
  }
}

export default CounterWithClass;