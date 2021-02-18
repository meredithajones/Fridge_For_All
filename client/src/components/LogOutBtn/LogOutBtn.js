import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./style.css";

function LogOutBtn() {
  // const { getLoggedIn } = useContext(AuthContext);

  // const history = useHistory();

  // async function logOut() {
  //   await axios.get("/auth/logout");
  //   await getLoggedIn();
  //   history.push("/");
  // }

  return (
    <button
      // onClick={logOut}
      type="button"
      className="btn pt-0 pb-0 pl-2 pr-2 mt-0 mb-0 ml-1 mr-1 "
    >
      Log Out
    </button>
  );
}

export default LogOutBtn;
