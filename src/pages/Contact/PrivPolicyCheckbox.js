import React from "react";
import { Link } from "react-router-dom";

const PrivPolicyCheckbox = ({ handlePrivPolicy, privPolicy }) => {
  const handleInput = () => {
    handlePrivPolicy(!privPolicy);
  };
  return (
    <label className="policy-checkbox">
      <input type="checkbox" onChange={handleInput} checked={privPolicy} />
      Akceptuję 
      <Link to="./polityka_prywatności"> Politykę Prywatności</Link>
    </label>
  );
};

export default PrivPolicyCheckbox;
