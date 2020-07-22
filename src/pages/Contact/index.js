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
    } else (console.log("czegoś brakuje"))
  };
  return (
    <>
      <form>
        <h3>Kontakt</h3>
        <FirstNameInput handleFirstName={handleFirstName} />
        <br />
        <LastNameInput handleLastName={handleLastName} />
        <br />
        <EmailInput handleEmail={handleEmail} />
        <br />
        <PhoneInput handlePhoneNumber={handlePhoneNumber} />
        <br />
        <CauseInput handleCause={handleCause} />
        <br />
        <PersonalMessage handleMessage={handleMessage} />
        <br />
        <PrivPolicyCheckbox
          handlePrivPolicy={handlePrivPolicy}
          privPolicy={privPolicy}
        />
        <br />
        <RegulationsCheckbox
          handleRegulations={handleRegulations}
          regulations={regulations}
        />
        <br />
        <button onClick={sendData}>klik</button>
        <br />
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
      </form>
    </>
  );
};

export default Contact;
