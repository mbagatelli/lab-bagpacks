import React, { Component } from "react";

class Section extends Component {
  render() {
    const message = this.props.message;
    const price = this.props.message.price.value.toString();
    return (
      <div class='col-4 mb-3'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{message.name}</h5>
            <img src={message.image} className='card-img-top' alt='' />
            <p>
              {(price / 100).toFixed(2)}
              {message.price.currency}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
