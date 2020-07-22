import React from "react";
import { Link } from "react-router-dom";


const PrivPolicyCheckbox = ({ handlePrivPolicy, privPolicy }) => {
  const handleInput = () => {
    handlePrivPolicy(!privPolicy);
  };
  return (
    <label>
      Akceptuję
      <Link to="./polityka_prywatności">Politykę Prywatności</Link>
      <input type="checkbox" onChange={handleInput} checked={privPolicy}/>
    </label>
  );
};

export default PrivPolicyCheckbox;
