import React from "react";
import { Link } from "react-router-dom";
import user from "../Images/user.png";

const ContactCard = ({contact, getIdToDelete}) => {

    const deleteClickHandler = (id) => {
        getIdToDelete(id);
    };

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"></img>
            <div className="content">
                <Link to={`/contact/${contact.id}`} state={{contact: contact}}>
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </Link>
            </div>
            <i 
                className="trash alternate outline icon"
                style={{color: "red", marginTop: "7px"}}
                onClick = {()=>deleteClickHandler(contact.id)}
            ></i> 
        </div>
    );
};

export default ContactCard;