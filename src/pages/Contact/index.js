import React, { useState, useEffect } from "react";
import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import CauseInput from "./CauseInput";
import PersonalMessage from "./PersonalMessage";
import PrivPolicyCheckbox from "./PrivPolicyCheckbox";
import RegulationsCheckbox from "./RegulationsCheckbox";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cause, setCause] = useState("inwestycja");
  const [content, setContent] = useState("");
  const [data, setData] = useState({});
  const [privPolicy, setPrivPolicy] = useState(false);
  const [regulations, setRegulations] = useState(false);
  useEffect(
    () =>
      setData({
        firstName,
        lastName,
        email,
        phoneNumber,
        cause,
        content,
      }),
    [firstName, lastName, email, cause, content, phoneNumber]
  );

  const handleFirstName = (callback) => {
    setFirstName(callback);
  };
  const handleLastName = (callback) => {
    setLastName(callback);
  };
  const handleEmail = (callback) => {
    setEmail(callback);
  };
  const handlePhoneNumber = (callback) => {
    setPhoneNumber(callback);
  };
  const handleCause = (callback) => {
    setCause(callback);
  };
  const handleMessage = (callback) => {
    setContent(callback);
  };
  const handlePrivPolicy = (callback) => {
    setPrivPolicy(callback);
  };
  const handleRegulations = (callback) => {
    setRegulations(callback);
  };

  const sendData = (e) => {
    e.preventDefault();
    if (privPolicy && regulations && firstName && lastName && email & content) {
      console.log(data, "w porząsiu");
    } else console.log("czegoś brakuje");
  };
  return (

      <div className="contact-cnt">
      <div className="form-cnt">
        <form className="form">
          <h3>Kontakt</h3>
          <FirstNameInput handleFirstName={handleFirstName} />
          <LastNameInput handleLastName={handleLastName} />
          <EmailInput handleEmail={handleEmail} />
          <PhoneInput handlePhoneNumber={handlePhoneNumber} />
          <CauseInput handleCause={handleCause} />
          <PersonalMessage handleMessage={handleMessage} />
          <PrivPolicyCheckbox
            handlePrivPolicy={handlePrivPolicy}
            privPolicy={privPolicy}
          />
          <RegulationsCheckbox
            handleRegulations={handleRegulations}
            regulations={regulations}
          />
          <button onClick={sendData}>klik</button>
        </form>
        </div>
        <div className="privacy-info">
          <p>
            Informujemy, że administratorem podanych przez Państwa danych
            osobowych jest Prestige Ventures Sp. z o.o. z siedzibą w Warszawie,
            kod pocztowy 00-844 przy ul. Grzybowska 87. Państwa dane będą
            przetwarzane w celu udzielenia odpowiedzi na zapytanie. Podanie danych
            osobowych jest dobrowolne, jednak niezbędne do tego celu. Przysługuje
            Państwu prawo dostępu do treści swoich danych osobowych oraz ich
            poprawiania. Państwa dane osobowe nie będą przetwarzane ani
            udostępniane osobom trzecim bądź innym podmiotom gospodarczym.
          </p>
        </div>
      </div>
  );
};

export default Contact;
