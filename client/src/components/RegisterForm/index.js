import React, { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./style.css";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

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
    }
  }

  return (
    <div className="container rounded w-75 mt-5 mb-5 p-3 d-block">
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
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="field"
        />

        <input
          type="password"
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
    </div>
  );
}

export default RegisterForm;
