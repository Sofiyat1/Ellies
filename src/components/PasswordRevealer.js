import React from 'react';
import { useState } from "react";
import { FiEye } from "react-icons/fi";

const PasswordRevealer = () => {
  const [shown, setShown] = useState(false);
  const [password, setpassword] = useState("");


  return (
    <>
      <div className="input">
        <input type={(shown, password )? "text" : "password"} name="Password" placeholder='Enter your password'
          onChange={(e) => setpassword(e.target.value)} required/>
        <FiEye className="reveal" onClick={() => setShown(!shown)} />
      </div>
      </>
  );
};



export default PasswordRevealer;