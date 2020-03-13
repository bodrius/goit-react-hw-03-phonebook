import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form
          onSubmit={e => {
            this.props.handelSubmitForm(e, {
              name: name,
              number: number,
              id: uuidv4()
            });
            this.setState({
              name: "",
              number: ""
            });
          }}
        >
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChangeInput}
          />
          <h2>Number</h2>
          <input
            type="phone"
            name="number"
            value={number}
            onChange={this.handleChangeInput}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
