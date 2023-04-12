import {createRoot} from "react-dom/client";
/* 
props={count:5}
*/
function ShoppingCart(props) {
    return (
        <div>{props.count} items in your cart</div>
    )
}

const root = document.querySelector("#react-root");
createRoot(root).render(<ShoppingCart count="5" />);

///
import {createRoot} from "react-dom/client";

function Navbar(props) {
    return (
        <>
        //<div>Welcome {`${props.user.first_name} ${props.user.last_name}`}</div>
            <div>Welcome {props.user.first_name} {props.user.last_name}</div>
            <p>You've got {props.notifications.length} notifications</p>
        </>
    )
}

let notifications = [{
    id: 1,
    text: "Order delivered"
}, {
    id: 2,
    text: "Order received"
}];

const user = {
    first_name: "Sam",
    last_name: "Wolf"
};

const root1 = document.querySelector("#react-root");
createRoot(root1).render(<Navbar notifications={notifications} user={user} />);