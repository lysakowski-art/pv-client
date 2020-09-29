import React, { useState } from "react";
import Navigation from "../components/Navigation/index";
import Footer from "../components/Footer/index";
import Main from "../components/Main/index";
import "./App.scss";
import Modal from "react-modal";
import CookieModal from "../components/CookieModal";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);
  return (
    <div className="wrapper">
      <Modal isOpen={isOpen} /*closeTimeoutMS={4000}*/ shouldCloseOnEsc={true} ariaHideApp={false} style={customStyles}>
        <CookieModal setIsOpen={setIsOpen} isOpen={isOpen} />
      </Modal>
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
