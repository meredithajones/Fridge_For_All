import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./style.css";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get("/auth/logout");
    await getLoggedIn();
    history.push("/");
  }

  return (
    <button onClick={logOut} className="btn">
      Log Out
    </button>
  );
}

export default LogOutBtn;
