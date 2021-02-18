import React, {useContext, useState} from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./style.css";

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {getLoggedIn} = useContext(AuthContext)

  const history = useHistory()
  

  const instance = axios.create({
    withCredentials:true
  })

async function login(e) {
  e.preventDefault()

  try {
    const loginData = {
      email, 
      password, 
    };

    await instance.post("http://localhost:3001/auth/login", loginData)
    await getLoggedIn()  
    history.push("/")
    
  } catch(err) {
    console.error(err)
  }
}
  return (
    <div>

      <form onSubmit={login}>
        <input 
        type="email" 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        style={{textAlign: "center"}}
        />
        <input 
        type="password" 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        style={{marginLeft: "5px", textAlign: "center"}} />
        <br></br>
        <button type="submit" className="btn" onClick={login} >Log in</button>
      </form>

    </div>



  )
}
export default LoginForm;