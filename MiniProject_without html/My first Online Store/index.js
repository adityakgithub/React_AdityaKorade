import {useState} from "react";
import {createRoot} from "react-dom/client";
import StoreFront from "./StoreFront.js";
function App() {
    // <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
    // <h2>Please login</h2>
    // <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
    const [loginStatus,setLoginStatus] = useState(false);
    // console.log(loginStatus);
    function handleLoginButton(){
        setLoginStatus(true);
        //console.log(loginStatus);
    }
    function handleLogoutButton(){
        setLoginStatus(false);
        //console.log(loginStatus);
    }
    // <button onClick={handleLoginButton}>Login</button>
    // {!loginStatus?<StoreFront/>: <><StoreFront/> <button>Logout</button></>}
    return (
        <>
          <h2>Please login</h2>
          
          {loginStatus?
          <>
            <StoreFront/> <button className="btn btn-outline" onClick={handleLogoutButton}>Logout</button>
          </>
          : <button className="btn btn-primary" onClick={handleLoginButton}>Login</button>}
        </>
    )
}

createRoot(document.querySelector("#react-root")).render(<App />);