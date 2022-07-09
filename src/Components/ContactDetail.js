import React from "react";
import { useLocation, Link } from "react-router-dom";
import user from "../Images/user.png"

const ContactDetail = () => {
    const contactDetail = useLocation();
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{contactDetail.state.contact.name}</div>
                    <div className="description">{contactDetail.state.contact.email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <div className="ui button blue center">
                        Back to Contact List
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetail;