import {createRoot} from "react-dom/client";

function Button(props){
    // const className=props.className;
    // const a=props.children;
    const {className,children} =props;
    return (
        <button className={className}>{children}</button>
    )
}

const root = document.querySelector("#react-root");

createRoot(root).render(<Button className="primary">Login</Button>);