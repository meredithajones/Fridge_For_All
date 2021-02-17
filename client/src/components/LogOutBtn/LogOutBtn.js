import axios from "axios";
import React, {useContext} from "react"
import { useHistory } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

function LogOutBtn () {
    
    const {getLoggedIn} = useContext(AuthContext)

    const history = useHistory();

   async function logOut() {
    await axios.get("/auth/logout");
    await getLoggedIn();
    history.push("/")
    
    }

    return <button onClick={logOut} className="primary">
         Log Out
    </button>

}

export default LogOutBtn;