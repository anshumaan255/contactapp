import React from "react";
import ContactCard from "./contactCard";

const ContactList = (props) => {
  
  const renderContactList = props?.contacts?.map((contact) => {
    return <ContactCard key={contact.id} contact={contact} clickHandler={props.clickHandler}></ContactCard>;
  });
  return <div className="ui celled list"> {renderContactList}</div>;
};

export default ContactList;
