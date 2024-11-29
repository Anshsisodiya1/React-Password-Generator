import React, { useState } from "react";
import './App.css';

const App = () => {
  const [length, setlength] = useState(6);
  const [lowercase, setlowercase] = useState(true);
  const [uppercase, setuppercase] = useState(false);
  const [number, setnumber] = useState(false);
  const [symbol, setsymbol] = useState(false);
  const [generatepassword,setgeneratepassword] = useState("");

  const lowerChar = "abcdefghijklmnopqrstuvwxyz";
  const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberchar = "0123456789";
  const symbolchar = '!@#$%^&*()_+?":<>{}~|.,';

  const passwordGen = () => {
    
    let combineChar = "";
    if (lowercase) {
      combineChar = combineChar + lowerChar;
    }
    if (uppercase) {
      combineChar = combineChar + upperChar;
    }
    if (number) {
      combineChar = combineChar + numberchar;
    }
    if (symbol) {
      combineChar = combineChar + symbolchar;
    }
    
    
  let password = '';
  

     for(let i=0;i<length;i++){
      // To target the random index off combinechar
       const random = Math.floor(Math.random()*combineChar.length);
       password = password+combineChar[random];

     }
     setgeneratepassword(password);
  };

  return (
    <>
      <input
        type="number"
        value={length}
        onChange={(e) => setlength(e.target.value)}
      />
      <input
        type="checkbox"
        checked
        onChange={(e) => setlowercase(e.target.checked)}
      />
      <label>Lowercase</label>
      <input
        type="checkbox"
        checked={uppercase}
        onChange={(e) => setuppercase(e.target.checked)}
      />
      <label>Uppercase</label>
      <input
        type="checkbox"
        checked={number}
        onChange={(e) => setnumber(e.target.checked)}
      />
      <label>Number</label>
      <input
        type="checkbox"
        checked={symbol}
        onChange={(e) => setsymbol(e.target.checked)}
      />
      <label>Symbol</label>
      <button onClick={passwordGen}>Generate</button>
       
      <input type="text" value={generatepassword} readOnly placeholder="Generated Password" />
    </>
  );
};

export default App;
