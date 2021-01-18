import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState
  }

  render() {
    return (
      <button onClick={this.handleClick} className="btn-toggle dark" type="button">
        Light mode
      </button>
    );
  }
}

export default Button;
