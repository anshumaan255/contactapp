import './App.css';
import React, {useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./contactList";
import { Link } from 'react-router-dom';

function App() {
   const LOCAL_STORAGE_KEY = "contacts";
   const [contacts,setContacts] = useState([]);

   const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,contact]);
   };
   useEffect(() => {
     const retriveContacts = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY ));
     if(retriveContacts)setContacts(retriveContacts);
   }, []);

   useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY ,JSON.stringify(contacts));
   }, [contacts]);
  return (
    <div className="ui container">
      <nav style={{ marginTop: "50px" }}>
        <Link to="/contacts"> Contacts </Link>
      </nav>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts ={contacts} />
    </div>
  );
   
}

export default App;
