import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const returnId = (id) => {
    props.retrieveId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} getIdToDelete={returnId} key={contact.id}></ContactCard>
    );
  });

  return (
    <div className="ui main">
      <h2>Contact List
        <Link to = "/add">
          <div style={{ display: "flex" }}>
            <button className="ui button blue" style = {{marginLeft: "auto"}}>Add Contact</button>
          </div>
        </Link>
      </h2>
      <div className="ui celled list">
        {renderContactList}
      </div>
    </div>
    )};

export default ContactList;
