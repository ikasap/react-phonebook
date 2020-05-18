import React from 'react';
import axios from 'axios';

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      this.setState({ displayErrors: true });
      return;
    }

    this.setState({ displayErrors: false });
    
    axios
      .post('http://localhost:3001/phones', {
        "name": event.target.name.value,
        "number": event.target.number.value
      })
      .then(res => {
        event.target.reset();
      })
      .catch(err => console.log(err));
  }
  render() {
    const { displayErrors } = this.state;
    return (
      <div className="ui form">
        <form noValidate onSubmit={this.handleSubmit} className={displayErrors ? 'error' : ''}>
          <div className="inline fields">
            <div className="eight wide field">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="five wide field">
              <input type="text" name="number" placeholder="Phone Number" required />
            </div>
            <div className="three wide field">
              <button type="submit" className="ui primary button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default MyForm