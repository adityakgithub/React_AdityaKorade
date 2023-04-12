import {createRoot} from "react-dom/client";

function Button(props){
    return (
        <button>{props.children}
        </button>
    )
}

const root = document.querySelector("#react-root");

createRoot(root).render(<Button>Login</Button>);