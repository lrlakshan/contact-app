import React, { useState } from "react";

const AddContact = (props) => {

const [contactData, setContactData] = useState({
    name: "",
    email: ""
});

// Handle onChange event in inputs
const handleChange = (evt) => {
    setContactData({
      ...contactData,
      [evt.target.name]:  evt.target.value
    });
  }

// Function to add the contact details
const addData = (e) => {
    e.preventDefault();

    if (contactData.name === "" || contactData.email === "") {
        alert("All fields should be filled");
        return;
    }

    props.addContactHandler(contactData);
    setContactData({name: "", email: ""});
}
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={addData}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactData.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contactData.email}
            onChange={handleChange}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
