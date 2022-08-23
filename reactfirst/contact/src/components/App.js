import './App.css';
import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./contactList"; 

function App() {
  const contacts=[
    {
      id: "1",
      "name": "Sarah",
      "email": "sarah545@gamil.com",
    },
    {
      id: "2",
      "name": "Anshumaan",
      "email": "anshu@gmail.com",
    },
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts ={contacts} />
    </div>
  );
   
}

export default App;
