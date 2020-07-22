import React from 'react';

const LastNameInput = ({handleLastName}) => {
    
    const handleInput = (e) => {
        handleLastName(e.target.value)
    }

    return ( 
        <label>
          Nazwisko
          <input onChange={handleInput} type="text" />
        </label>
     );
}
 
export default LastNameInput;