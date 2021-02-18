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

    <div style={{textAlign: "center"}}>

      <form onSubmit={register}>
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
        style={{marginLeft: "5px", textAlign: "center"}}

        />
        
        <input 
        type="password" 
        placeholder="Verify Your Password"
        onChange={(e) => setPasswordVerify(e.target.value)}
        value={passwordVerify}
        style={{marginLeft: "5px", textAlign: "center"}}
         />
         <br></br>
        <button type="submit" className="btn" onClick={register}> Register</button>
            
      </form>
    </div>

  )
}

export default RegisterForm;