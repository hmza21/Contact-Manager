const Form = props => (
  <form>
    <label htmlFor="name">Name: </label>
    <input type="text" />

    <br />
    
    <label htmlFor="email">Email: </label>
    <input type="text" />
    
    <br />
    
    <button type="submit">Add Person</button>
  </form>
);

export default Form;
