import {createRoot} from "react-dom/client";

function Navbar(props) {
    //const class1=props.theme;
    //return <h1 id={props.theme} className={class1}>Online supermarket</h1>
    return <h1 className={props.theme}>Online supermarket</h1>
}

const root = document.querySelector("#react-root");

createRoot(root).render(<>
        <Navbar theme="light" />
        <Navbar theme="dark" />
    </>);