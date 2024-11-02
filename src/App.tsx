import React from "react";
import Hero from "./components/home/Hero";
import Benefit from "./components/home/Benefit";
import Features from "./components/home/Features/Features";
import Contact from "./components/home/contact";

import InvitationForm from "./components/home/InvitationForm/InvitationForm";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Benefit />
      <InvitationForm />
      <Contact />
    </div>
  );
};

export default App;
