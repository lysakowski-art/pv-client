import React from "react";
import { Link } from "react-router-dom";


const RegulationsCheckbox = ({ handleRegulations, regulations }) => {
  const handleInput = () => {
    handleRegulations(!regulations);
  };
  return (
    <label className="policy-checkbox">
      <input type="checkbox" onChange={handleInput} checked={regulations}/>
      Akceptuję
      <Link to={"tu wstawić wewnętrzny do pagea regulamin"}>regulamin</Link>
    </label>
  );
};

export default RegulationsCheckbox;
