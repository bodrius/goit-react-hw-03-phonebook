import React from 'react'
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';
const ContactList = ({contact, deleteContact}) => {
    return (
        <ul>
            {

                contact.map(contact => (<ContactListItem contact={contact} key={contact.id} deleteContact={deleteContact}/>))
                
            }
        </ul>
    );
}


ContactList.propTypes = {
    contact: PropTypes.array,
    deleteContact:PropTypes.func
}
export default ContactList;