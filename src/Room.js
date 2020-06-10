import React, { useState } from "react";
import './room.css';
function Room() {
  let [isLit, setLit] = useState(false);
  return (
    <div className= {'room $ {isLit? "lit" : "dark"}'}>
      This Room is  :
      {isLit? "lit" : "dark"}
      <br/>
            <button onClick= {() => setLit(!isLit)}> On/Off  </button>
    </div>
  );
}

export default Room;
