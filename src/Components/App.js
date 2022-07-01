import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import {v4} from "uuid";

const App = () => {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // Function to add new contacts to contacts array
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id:v4(), ...contact}]);
  };

  // Function to delete paticular contact using the id and set the remaining contacts to setContacts
  const deleteContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => {
      return id !== contact.id;
    });
    setContacts(newContacts);
  };

  // Only calls in the initial render with the contact data on the local storage
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts !== null && retrieveContacts.length > 0) {
      setContacts(retrieveContacts);
    }
  }, []);

  // Calls whenever the contacts state is changed
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
        <Router>
          <Header />
          <Routes>
            <Route 
              path="/" 
              exact
              element={
                <ContactList 
                  contacts = {contacts}
                  retrieveId = {deleteContactHandler}
                />
              }
            />
            <Route 
              path="/add" 
              element={
                <AddContact 
                  addContactHandler = {addContactHandler}
                />
              }
            />
          </Routes>
        </Router>
        {/* <AddContact addContactHandler = {addContactHandler}/>
        <ContactList contacts = {contacts} retrieveId = {deleteContactHandler}/> */}
    </div>
  );
}

export default App;
