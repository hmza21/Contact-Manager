import './App.css';
import Form from './components/form'
import ContactsList from './components/contactsList'

import { useState } from 'react';

const App = () => {
  
  const [contacts, setContacts] = useState([]);
  
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <>
      <h1>Contact Manager App</h1>
      <Form addContact={ addContact }/>
      <ContactsList contacts={ contacts }/>
    </>
  );
}

export default App;
