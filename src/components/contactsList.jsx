import ContactsListItem from './contactsListItem'
import '../css/contactsList.css'

const ContactsList = props => (
  <div id="contacts-list">
    <h2>Contacts:</h2>
    { props.contacts.length !== 0 ? <ol>{props.contacts.map((contact, index) => <ContactsListItem index={ index } contact={ contact } deleteContact={ props.deleteContact } />)} </ol> : (<p>No contacts yet.</p>) }
  </div>
);

export default ContactsList;
