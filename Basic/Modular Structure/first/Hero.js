// Define the Hero Component
import React from "react";
export default function Hero(){
    return (
        <React.Fragment>
            <h1 class="title">Supermarket</h1>
             <p>Start shopping</p> 
            
        </React.Fragment>
    )
    // not happening =>React.createElement("p",{},"Start shopping")
}