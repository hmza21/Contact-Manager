import '../css/contactsListItem.css'
import { useState } from 'react';

const ContactsListItem = props => {
  
  // eslint-disable-next-line
  const [index, setIndex] = useState(props.index);

  const deleteContactSubmit = (e) => {
    e.preventDefault();
    props.deleteContact(index);
  }

  return (
    <li>
      <form onSubmit={ deleteContactSubmit }>
        <strong>{ props.index + 1 }. { props.contact.username }</strong> - { props.contact.email }
        <input type="hidden" value={ index } />
        <button type="submit">Delete</button>
      </form>
    </li>
  );
};

export default ContactsListItem;
