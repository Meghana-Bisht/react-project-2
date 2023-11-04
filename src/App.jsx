import React from "react";
import './App.css';
import Navbar from "./components/Header/Navbar";
import ContactUs from "./components/ContactUs/ContactUs";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="main_container">
        <ContactUs></ContactUs>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
};

export default App;
