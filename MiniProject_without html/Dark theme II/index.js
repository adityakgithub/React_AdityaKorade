/* 
Problem Statement
Update the Navbar Component such that it renders:

in dark mode when the theme is "dark"
in light mode when the theme is "light"
In both cases, the navbar needs to have the class navbar in addition of the dark or light.
We've already given you the styles in the index.css file.
*/
import {createRoot} from "react-dom/client";
import clsx from "clsx";

function Navbar(props) {
    let theme=props.theme==="light"?true:false;
    const result=clsx({"navbar":true,"light":theme,"dark":!theme})
    console.log(result);
    //return <h1>Online supermarket</h1>
    
    return <h1 className={result}>Online supermarket</h1>
    /* 
    console.log(props.theme)
    return <h1 className={`"navbar" ${props.theme}`}>Online supermarket</h1>
    */
    
}

const root = document.querySelector("#react-root");

createRoot(root).render(<>
        <Navbar theme="light" />
        <Navbar theme="dark" />
    </>);

/* 
import {createRoot} from "react-dom/client";
import clsx from "clsx";

function Navbar(props) {
    const className = clsx({
        "navbar": true,
        "dark": props.theme === "dark",
        "light": props.theme === "light"
    });

    return <h1 className={className}>Online supermarket</h1>
}

const root = document.querySelector("#react-root");

createRoot(root).render(<>
        <Navbar theme="light" />
        <Navbar theme="dark" />
    </>);

 */