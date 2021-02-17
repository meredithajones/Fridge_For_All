import React, {useContext, useState} from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

function RegisterForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("")
  
  const {getLoggedIn} = useContext(AuthContext)

  const history = useHistory()
  

  const instance = axios.create({
    withCredentials:true
  })

async function register(e) {
  e.preventDefault()

  try {
    const registeredData = {
      email, 
      password, 
      passwordVerify
    };

    await instance.post("http://localhost:3001/auth", registeredData)
      await getLoggedIn()
      history.push("/")

  } catch(err) {
    console.error(err)
  }
}

  return (
    <div>
      <h1> Register a new account</h1>
      <form onSubmit={register}>
        <input 
        type="email" 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        <input 
        type="password" 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password} />
        <input 
        type="password" 
        placeholder="Verify Your Password"
        onChange={(e) => setPasswordVerify(e.target.value)}
        value={passwordVerify} />
        <button type="submit" className="btn btn-primary" onClick={register}>Register</button>
      </form>

    </div>


  )
}

export default RegisterForm;