import {createRoot} from "react-dom/client";
import {Link} from "./Link.js";
import {Button} from "./Button.js";
import {Input} from "./Input.js";
import {Container} from "./Container.js";

function App() {
    return (<>
            <Link/>
            <Button />
            <Input />
            <Container />
    </>);
}

createRoot(document.querySelector("#react-root")).render(<App />);