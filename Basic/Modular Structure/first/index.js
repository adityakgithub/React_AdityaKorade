import {createRoot} from "react-dom/client";
import Hero from "./Hero.js";
import React from "react";

function Index(){
    return (
        //<Hero/>
        React.createElement(Hero,{})
    )
}
//createRoot(document.querySelector("#react-root")).render(<Index/>)
createRoot(document.querySelector("#react-root")).render(React.createElement(Index,{}))