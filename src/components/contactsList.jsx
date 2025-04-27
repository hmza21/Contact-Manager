import ContactsListItem from './contactsListItem'

const ContactsList = props => (
  <>
    <h2>Contacts:</h2>
    <ol>
      <ContactsListItem />
      <ContactsListItem />
      <ContactsListItem />
      <ContactsListItem />
      <ContactsListItem />
    </ol>
  </>
);

export default ContactsList;
