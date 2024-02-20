import React, { useState } from "react";

export const TokenInput = () => {
  const [text, setText] = useState("");

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <form>
      <label htmlFor="text-input">Enter Text:</label>
      <input type="text" id="text-input" value={text} onChange={handleChange} />
      <p>You entered: {text}</p>
    </form>
  );
};
