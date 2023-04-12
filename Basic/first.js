/* 
npm install react
online application tool
e recommend using online editors such as CodeSandbox and StackBlitz.
*/
import React from "react";

/* 
React can Have:
    1.properties: like React.version
    2.method: React.createElement()
    3.createRoot()

*/

function getReactVersion() {
    return React.version;
    //Creating Element in js vs React
    const element = document.createElement("h2");

    // this creates: <h2></h2>
    // which you can then insert in the DOM:
    //document.body.appendChild(element); ==>appending element

    //adding class and style

    element.classList.add("something")
    element.style.backgroundColor="red";
    //In react js can be written as..
    element.className = "name-of-class";
    element.style = "color: red; background-color: blue";
    //Multiple classes

    element.className = "container center";

    /* Pure React: Element creation*/
    const element1 = React.createElement("h1",{},"");
        /* 
        returns an object similar to this one:
        {
        type: 'h1',
        props: {},
        value: ""
        } 

        What is Element? like what is h1?
        In React, an Element is the smallest building block.
        */





}

// sample usage (do not modify)
console.log(getReactVersion());

function createTitle() {
    return  React.createElement("h1",{className:"hero-title"},"Welcome to our supermarket")
 }
 
 // sample usage (do not modify)
 console.log(createTitle());

 /* 
 npm install react-dom
 React DOM is seprate Library;
 React creates a virtual representation of your User Interface (in what we call a Virtual DOM). Then ReactDOM is the library that efficiently updates the DOM based on that Virtual DOM.

The Virtual DOM exists to figure out which parts of the UI need to be updated and then batch these changes together. ReactDOM receives those instructions from React and then efficiently updates the DOM.

Q. why its seprate library?
to allow launch of React Native...

*/

/* 
React Native:
for developing local application
React create functionality 
then,
 ReactDOM connect it to UI 
 and ReactNative connect it to Local Application
*/

/* 
Reconciliation
React is creating the virtual representation of your UI in the memory, and then ReactDOM receives that and syncs your UI (and the changes to it) to the DOM. This process is called reconciliation.
*/

import React from "react";
import {createRoot} from "react-dom/client";

const renderelement = React.createElement("h1",{className:"title"},"Online Supermarket");

const root= document.querySelector("#react-root");

createRoot(root).render(renderelement);

/* 
JSX is syntactic sugar for React.createElement
JSX is providing you with syntactic sugar (as in making it nicer to read/write) for the React.createElement function.
the JSX that you write is being converted to React.createElement.
This JSX syntax may look similar to HTML, but it is NOT HTML.
*/

import React from "react";
import{createRoot} from "react-dom/client";
const htmlelement = document.querySelector("#react-root")
const element = <p>My first JSX</p>
//const element = React.createElement("p",null,"My first JSX");

createRoot(htmlelement).render(element);

import {createRoot} from "react-dom/client";
createRoot(document.querySelector("#react-root")).render(<p className="selected" id="promo">Hello World</p>)

/* 
Assign it to a variable:

const title = <h1 className="title">Supermarket</h1>;
Return it from a function

function getTitle() {
    return <h1 className="title">Supermarket</h1>
}
Conditionally return different elements:
function getTitle(is_open) {
    if (is_open) {
        return <h1 className="title">Supermarket</h1>
    } else {
        return <h1 className="title">Supermarket (closed)</h1> 
    }
}
Other things you can normally do. It's a call to React.createElement(...)
*/

import React from "react";

function getLoginStatus(is_loggedin) {
    if(is_loggedin){
        return React.createElement("p",null,"You are logged in");
    }else{
        return React.createElement("a",{href:"/login"},"Login")
    }
    // if(is_loggedin){
    //     return <p>You are logged in</p>
    // } else{
    //     return <a href="/login">Login</a>
    // }
}

/* 
What is an expression?
An expression is any valid JavaScript code that resolves to a value.
This means it's any JavaScript code that has an end result, for example:

3 + 4

const title = <h1>You have {2 + 3} notifications</h1>;


*/
function getNavbar(user) {
    console.log(user.name)
    return <div>Logged in as {user.name}. Log out</div>
}

// sample usage (do not modify)
const element2 = getNavbar({
    name: "Sam",
    age: 34
});
console.log(element);

function getPaymentButton(user) {
    let name = "disabled";
    if (user.is_loggedin) {
        name = "clickable";
    }
    return <button className={name}>Pay</button>;
}

// sample usage (do not modify)
const user = {
    id: 1,
    is_loggedin: true
}
console.log(getPaymentButton(user));


/* 
<li id="item-1"></li>
<li id="item-2"></li>
<li id="item-3"></li>
Say you needed to generate these list items with JSX, the id is item- and then followed by a number.
The number is dynamic, whereas the item- is the same.
However, you have to treat it as being entirely dynamic, meaning the attribute's value will have to be wrapped with curly braces {}.

There are multiple ways to write it with JSX (assuming a variable count):

Using string concatenation:
<li id={"item-" + count}></li>
or even better, using template strings:
<li id={`item-${count}`}></li>
You can use whichever you prefer but make sure you wrap the attribute with curly braces {}.

Multiple classes
Another common use case is when working with multiple class names, for example:

const clickable = "clickable";
const active = "active";

const button = <button className={clickable + " " + active}>Click me</button>;
Which can also be written using template strings:

const button = <button className={`${clickable} ${active}`}>Click me</button>;


*/

import React from "react";
function getPaymentMethods() {
//   return (
//       <select className="payment-methods">
//         <option className="payment-method">Card</option>
//         <option className={`payment-method`}>Paypal</option>
//         <option className="payment-method">Cash on delivery</option>
//       </select>
//   )  

    return (
        React.createElement(
            "select",{className:"payment-methods"},
            React.createElement(
                "option",{className:"payment-method"},"Card"
            ),
            React.createElement(
                "option",{className:"payment-method"},"Paypal"
            ),
            React.createElement(
                "option",{className:"payment-method"},"Cash on delivery"
            )
        )
    )
}

// sample usage (do not modify)
console.log(getPaymentMethods());

function getDropdownMenu() {
    return (
        <ul id="dropdown-menu" className="dropdown">
            <li>Profile</li>
            <li>Orders</li>
            <li className="separator"></li>
            <li>Logout</li>
        </ul> 
    )
}

// sample usage (do not modify)
console.log(getDropdownMenu());

//self closing tags
/* 
img
br (line break)
hr (horizontal rule)
input 
<br>its same as =><br />
*/

function getUserAvatar(path) {
    return (
        // <img src={path}/>
        <img src={path}/>
    )
}

// sample usage (do not modify)
const url = "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1576923026/react-tutorial/misc/user.png";
console.log(getUserAvatar(url));


//JSX Fragments
/* 
You can return only one react element(i,e return only one object from one component)
if we want to return more than one react Element,
solution is React.Fragment
it enables us to return more than one element
Syntax:
return (
    <>
    </>
)
or 
return (
    <React.Fragment>// only need import React from "react";
    </React.Fragment>
)
*/

import React from "react";
function getFooter() {
    return (
        <React.Fragment>
            <h3>Your online supermarket</h3>
  <ul>
      <li>Contact</li>
      <li>Press</li>
      <li>About</li>
  </ul>
  <p>All rights reserved &copy;</p>
        </React.Fragment>
    )
}

// sample usage (do not modify)
console.log(getFooter());