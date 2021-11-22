import React, { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./style.css";
import Modal from "../Modal"

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();
      
  // State for modal error message
  const [errMsg, setErrMsg] = useState('');
  // State for modal visibility
  const [show, setShow] = useState(false);
  // Modal functions for closing and showing
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);

  const instance = axios.create({
    withCredentials: true,
  });

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await instance.post("/auth/login", loginData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
      document.getElementById("password").value = "";
      document.getElementById("email").value = "";
      setErrMsg("Wrong username or password");
      handleShow();
    }
  }
  return (
    <div className="container rounded w-75 mt-5 mb-5 p-3 d-block">
      <form onSubmit={login}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="field"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="field"
        />
        <br></br>
        <button type="submit" className="btn" onClick={login}>
          Log in
        </button>
      </form>
        <Modal show={show} handleClose={handleClose} error={errMsg} />
    </div>
  );
}
export default LoginForm;
