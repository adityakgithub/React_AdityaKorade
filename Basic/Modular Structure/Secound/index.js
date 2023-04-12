import {createRoot} from "react-dom/client";
import {Button} from "./Button.js";
import {Link} from "./Link.js"; 
function App() {
    return (
        <>
            <Button />
            <Button />
            <Link />
        </>
    )
}

// Sample usage (do not modify)
createRoot(document.querySelector("#react-root")).render(<App />);