import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // Function to add new contacts to contacts array
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  // Only calls in the initial render with the contact data on the local storage
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts.length > 0) {
      setContacts(retrieveContacts);
    }
  }, []);

  // Calls whenever the contacts state is changed
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
        <Header />
        <AddContact addContactHandler = {addContactHandler}/>
        <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
