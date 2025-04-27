import './css/App.css';
import Form from './components/form'
import ContactsList from './components/contactsList'

import { useState } from 'react';

const App = () => {
  
  const [contacts, setContacts] = useState([]);
  
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  }

  return (
    <>
      <div id="main">
        <h1>Contact Manager App</h1>
        <Form addContact={ addContact }/>
        <ContactsList contacts={ contacts } deleteContact={ deleteContact }/>
      </div>
    </>
  );
}

export default App;
