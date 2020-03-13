import React from 'react'
import PropTypes from 'prop-types';
const ContactListItem = ({contact:{id, name, number}, deleteContact}) => {
    return (
        <li>
            <span>{name}</span><br/>
            <span>{number}</span>
            <button type="button" id={id} onClick={deleteContact} >Delete</button>
        </li>
    );
}

ContactListItem.propTypes = {
    deleteContact:PropTypes.func,
    contact: PropTypes.objectOf(
     PropTypes.shape({
        id:PropTypes.object,
        name:PropTypes.string,
        number:PropTypes.string  
    }).isRequired,
    ).isRequired
}


export default ContactListItem;