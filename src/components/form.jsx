import { useState } from "react";
import '../css/form.css'

const Form = props => {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const addContactSubmit = (e) => {
    e.preventDefault();
    
    const newContact = {
      username,
      email
    };
    
    props.addContact(newContact);

    setUsername("");
    setEmail("");
  };
  
  return (
    <form onSubmit={ addContactSubmit }>
      <input type="text" value={ username } onChange={e => setUsername(e.target.value)} placeholder="Name"/>
      <input type="text" value={ email } onChange={e => setEmail(e.target.value)} placeholder="Email"/>
      <button type="submit">Add Person</button>
    </form>
  );
}

export default Form;
