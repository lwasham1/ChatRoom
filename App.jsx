import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function App() {

const [username, setUsername] = useState("");
const [validUsername, setValidUsername] = useState(true);

const MAX_LETTERS = 14;



function isValidUsername(username){
    if(Username.trim().length > maxLetters){
      alert(`Username must be ≤ ${MAX_LETTERS} characters.`)
      setValidUsername(false);
    }
    else if(username.trim() == ""){
      alert(`Must type username.`)
      setValidUsername(false);
    }
}
const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isValidUsername(username);
  };

  const handleLinkClick = (e) => {
    if (!validUsername) {
      e.preventDefault();
      isValidUsername(username);
    } else {
      
      localStorage.setItem('username', username);
      console.log('Username stored:', username);
    }
  };

  return (
    <>
      <div>
        <h1 className = "opening-header">Chat Time</h1>
        <form onSumbit={handleSumbit}>
          <label>UserName...</label>
          <input 
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            maxLength={MAX_LETTERS}
            placeholder="Enter your username"
            className="username-input"
          />
        </form>
        <na>
            <Link>
              <button className = "joinlobby-button" onClick={handleSumbit}></button>
            </Link>  
        </na>
      </div>
    </>
  )
}

export default App
