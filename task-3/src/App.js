import React from "react";
import ContactForm from "./component/contactForm/ContactForm";
import ContactList from "./component/contactList/ContactList";
import Filter from "./component/filter/Filter";
import css from "../src/App.module.css";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" }
    ],
    filter: ""
  };

componentDidMount() {
  this.setState({
    contacts:JSON.parse(localStorage.getItem("contacts"))
  })
}

  componentDidUpdate() {
    localStorage.setItem(
      "contacts",
      JSON.stringify(this.state.contacts)
    );
  }

  handelSubmitForm = (e, data) => {
    e.preventDefault();
    const checkName = this.state.contacts.some(
      contact => contact.name === data.name
    );
    !checkName
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, data]
        }))
      : alert("You can not add this contact!");
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  checkName = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <>
        <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm handelSubmitForm={this.handelSubmitForm} />
          <h2>Contacts</h2>
          {this.state.contacts.length > 2 && (
            <Filter checkName={this.checkName} />
          )}

          <ContactList
            contact={this.filterContacts()}
            deleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
