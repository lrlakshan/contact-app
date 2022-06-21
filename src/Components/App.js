import React, {useState} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {

  const [contacts, setContacts] = useState([]);

  // Function to add new contacts to contacts array
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  return (
    <div>
        <Header />
        <AddContact addContactHandler = {addContactHandler}/>
        <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
