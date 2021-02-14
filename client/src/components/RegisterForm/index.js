import React, {useState} from "react";
import axios from "axios"

function RegisterForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("")

async function register(e) {
  e.preventDefault()

  try {
    const registeredData = {
      email, 
      password, 
      passwordVerify
    };

    await axios.post("http://localhost:3001/auth", registeredData)

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
        <button type="submit" className="btn btn-primary">Register</button>
      </form>

    </div>


  )
}

export default RegisterForm;