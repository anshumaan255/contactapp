import './App.css';
import React, {userState} from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./contactList"; 

function App() {
   const [contacts,setContacts] = useState([]);
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts ={contacts} />
    </div>
  );
   
}

export default App;
