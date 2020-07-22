import React from 'react';

const FirstNameInput = ({handleFirstName}) => {
    
    const handleInput = (e) => {
        handleFirstName(e.target.value)
    }

    return ( 
        <label>
          Imię
          <input onChange={handleInput} type="text" />
        </label>
     );
}
 
export default FirstNameInput;