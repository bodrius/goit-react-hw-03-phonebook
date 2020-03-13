import React from "react";
import PropTypes from "prop-types";

import ContactListItem from "./ContactListItem";
const ContactList = ({ contact, deleteContact }) => {
  return (
    <ul>
      {contact.map(contact => (
        <ContactListItem
          contact={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func,
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string
    }).isRequired
  ).isRequired
};
export default ContactList;
