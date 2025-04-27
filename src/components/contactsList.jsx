import ContactsListItem from './contactsListItem'

const ContactsList = props => (
  <>
    <h2>Contacts:</h2>
    <ol>
      { props.contacts.map(contact => <ContactsListItem contact={ contact } />) }
    </ol>
  </>
);

export default ContactsList;
