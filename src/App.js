import { useState } from "react";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Testimonials from "./components/Testimonials/Testimonials";
import TopBar from "./components/TopBar/TopBar";
import Work from "./components/Works/Work";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Menu />
      <Work />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
