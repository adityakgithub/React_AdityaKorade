import {createRoot} from "react-dom/client";

function WelcomeUser(props) {
    //console.log(props?.user?? return null)
    //return <h1>Welcome {props.user.name}</h1>
    if(props.user){
        return <h1>Welcome {props.user.name}</h1>
    }
    return;
}

const user = {
    id: 1,
    name: "Sam Blue"
};
const root = document.querySelector("#react-root");

createRoot(root).render(<>
        <WelcomeUser user={user} />
        <WelcomeUser />
    </>);