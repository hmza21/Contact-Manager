import { useState } from "react";

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
      <label htmlFor="name">Name: </label>
      <input type="text" value={ username } onChange={e => e.target.value} />

      <br />
      
      <label htmlFor="email">Email: </label>
      <input type="text" value={ email } onChange={e => e.target.value} />
      
      <br />
      
      <button type="submit">Add Person</button>
    </form>
  );
}

export default Form;
