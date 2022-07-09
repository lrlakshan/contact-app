import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import api from "../Api/Contacts";
import {v4} from "uuid";

const App = () => {

  const [contacts, setContacts] = useState([]);

  const retreiveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  const addNewContact = async (newcontact) => {
    
    const response = await api.post("/contacts", newcontact);
    return response.data;
  }

  // Function to add new contacts to contacts array
  const addContactHandler = async (contact) => {

    const request = {
      id : v4(),
      ...contact
    }

    const addedNewContact = await addNewContact(request);
    setContacts([...contacts, addedNewContact]);
  };

  // Function to delete paticular contact using the id and set the remaining contacts to setContacts
  const deleteContactHandler = async (id) => {

    await api.delete(`/contacts/${id}`);
    const newContacts = contacts.filter((contact) => {
      return id !== contact.id;
    });
    setContacts(newContacts);
  };

  // Only calls in the initial render with the contact data from the database
  useEffect(() => {

    const getAllContacts = async () => {

      const allContacts = await retreiveContacts();

      if (allContacts !== null && allContacts.length > 0) {
        setContacts(allContacts);
      }
    }

    getAllContacts();
  }, []);

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
            <Route
              path="/contact/:id"
              element={<ContactDetail></ContactDetail>} 
            />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
