import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="card">
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Card;