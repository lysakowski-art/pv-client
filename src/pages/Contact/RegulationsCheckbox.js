import React from "react";
import { Link } from "react-router-dom";


const RegulationsCheckbox = ({ handleRegulations, regulations }) => {
  const handleInput = () => {
    handleRegulations(!regulations);
  };
  return (
    <label>
      Akceptuję
      <Link to={"tu wstawić wewnętrzny do pagea regulamin"}>regulamin</Link>
      <input type="checkbox" onChange={handleInput} checked={regulations}/>
    </label>
  );
};

export default RegulationsCheckbox;
