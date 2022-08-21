import './App.css';
import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import contactCard from "./contactCard";
import contactList from "./contactList";
 

function App() {
  return (
    <div>
      <Header />
      <AddContact />
     {/* <contactList />*/}
    </div>
  );
   
}

export default App;
