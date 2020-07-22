import React from "react";


const CauseInput = ({handleCause}) => {
    const handleInput = (e) => {
        handleCause(e.target.value)
    }
    return (
    <label>
      Powód kontaktu
      <select onChange={handleInput}>
        <option value="inwestycja">Inwestycja</option>
        <option value="broszura">Prośba o wysłanie szczegółowej broszury</option>
        <option value="inny">Inny</option>
      </select>
    </label>
  );
};

export default CauseInput;
