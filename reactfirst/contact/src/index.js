import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./components/contactList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="contacts" element={<ContactList contacts={[{ name: "Rishabh", email: "rish@yopmail.com" }]} />} />
  </Routes>
  </BrowserRouter>
);
