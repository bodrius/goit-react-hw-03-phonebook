import React from "react";
import PropTypes from "prop-types";
const ContactListItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li>
      <span>{name}</span>
      <br />
      <span>{number}</span>
      <button type="button" id={id} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  deleteContact: PropTypes.func,
  id: PropTypes.object,
  name: PropTypes.object,
  number: PropTypes.string
};

export default ContactListItem;
