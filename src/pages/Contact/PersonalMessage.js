import React from "react";

const PersonalMessage = ({handleMessage}) => {
    const handleInput = (e) => {
        handleMessage(e.target.value)
    }
    return (
    <textarea onChange={handleInput} cols="30" rows="6">
      What's on your mind?
    </textarea>
  );
};

export default PersonalMessage;
