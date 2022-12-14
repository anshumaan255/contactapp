import './App.css';
import React, {useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./contactList";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function App() {
   const LOCAL_STORAGE_KEY = "contacts";
   const [contacts,setContacts] = useState([]);

   const addContactHandler = (contact) => {
    
    setContacts([...contacts,{id: uuidv4(), ...contact }]);
   };

   const removeContactHandler = (id)=> {
     const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
     });

     setContacts(newContactList); 
   }
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
      <Router>
      <Header />
      <Route path="/add" componnt = {AddContact} />
      <Route path="/" component={ContactList} />
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts ={contacts} clickHandler={(id) => removeContactHandler(id)} /> */}
      </Router>
    </div>
  );
   
}

export default App;
