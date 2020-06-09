import React, { useState } from "react";

function Room() {
  const [isLit, setLit] = useState(true);
  return (
    <div>
      This is the Room component for use state learning demo :
      {isLit? "lit" : "dark"}
      <br/>
            <button onClick= {() => setLit(!isLit)}> Flip  </button>
    </div>
  );
}

export default Room;
