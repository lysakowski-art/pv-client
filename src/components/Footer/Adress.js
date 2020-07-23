import React from "react";
import ReactHtmlParser from "react-html-parser";
const Adress = ({ el }) => {
  return (
    <>
      <div className="contact-adress" key={el.id}>
      <h4>ADRESS</h4>
        {ReactHtmlParser(el.content)}
      </div>
    </>
  );
};

export default Adress;
