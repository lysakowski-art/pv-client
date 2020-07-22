import React from "react";

const EmailInput = ({ handleEmail }) => {
  const handleInput = (e) => {
    handleEmail(e.target.value);
  };

  return (
    <label>
      Email
      <input onChange={handleInput} type="email" />
    </label>
  );
};

export default EmailInput;
