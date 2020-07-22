import React from "react";
import Navigation from "../components/Navigation/index";
import Footer from "../components/Footer/index";
import Main from "../components/Main/index";
import "./App.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
