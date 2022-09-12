import React from "react";
import ContactCard from "./contactCard";

const ContactList = (props) => {
  const contacts = [{
    id: "1",
    "name":"Anshumaan",
    "email":"sc@gmail.com"
  }]
  const renderContactList = contacts?.map((contact) => {
    return <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactHandler}></ContactCard>;
  });
  return <div className="ui celled list"> {renderContactList}</div>;
};

export default ContactList;
