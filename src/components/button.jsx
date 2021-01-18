import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }

  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }

  handleClick() {
    this.setState
  }

  render() {
    let boxClass = ["box"];
    if (this.state.addClass) {
      boxClass.push('green');
    }

    return (
      <button className={boxClass.join(' ')} type="button" onClick={this.this.toggle.bind(this)}{this.state.addClass ? "Remove a class" : "Add a class (click the box)"}>
        Light mode
      </button>
    );
  }
}

export default Button;
