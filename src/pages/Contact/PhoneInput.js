import React from 'react';
const PhoneInput = ({handlePhoneNumber}) => {
    const handleInput = (e) => {
        handlePhoneNumber(e.target.value);
    }
    return ( 
        <label>
          Telefon
          <input onChange={handleInput} type="number" />
        </label>
     );
}
 
export default PhoneInput;