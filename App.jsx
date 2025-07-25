import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function App() {

const [username, setUsername] = useState("");
const [validUsername, setValidUsername] = useState(true);


function onSubmit(){
  if(username != ""){
    setUsername(username.trim())
  }
  else{
    setUsername("DanielEnis")
  }
}




  return (
    <>
      <div className = "opening-header">
        <h1 className = "opening-h1">Chat Time</h1>
        <form form onSubmit={onSubmit}>
          <input 
           type="text"
           id="username"
           name="username"
           maxlength="14"
          />
        </form>
        
      </div>
      <div>
        <form>
          <input
            type="text"
            id="lobby-id"
            name="lobby-id"
            maxlength="8"
          />
        </form>
        <button type="onSubmit">Create Lobby</button>

      </div>
    </>
  )
}

export default App

