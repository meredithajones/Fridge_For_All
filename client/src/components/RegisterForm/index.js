import React, { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./style.css";
import Modal from "../Modal";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

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

  async function register(e) {
    e.preventDefault();

    try {
      const registeredData = {
        email,
        password,
        passwordVerify,
      };

      await instance.post("/auth", registeredData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
      document.getElementById("password").value = "";
      document.getElementById("re-enterPassword").value = "";
      setErrMsg("Please re-enter password correctly");
      handleShow();
    }
  }

  return (
    <div className="container rounded w-75 mt-5 mb-5 p-0 d-block">
      <form onSubmit={register}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="field"
        />

        <input
          type="password"
          id = "password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="field"
        />

        <input
          type="password"
          id = "re-enterPassword"
          className="field"
          placeholder="Verify Your Password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />

        <br />
        <div class="row">
          <div class="col text-center">
            <button type="submit" className="btn" onClick={register}>
              {" "}
              Register
            </button>
          </div>
        </div>
      </form>
        <Modal show={show} handleClose={handleClose} error={errMsg} />
    </div>
  );
}

export default RegisterForm;
