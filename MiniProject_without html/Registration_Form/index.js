import {createRoot} from "react-dom/client";
import React,{useState} from "react";


function RegisterForm() {
    const [inputName,setInputName]= useState("");
    const [selectType,setSelectType] = useState("");
    const [textAreaMotivation,setTextAreaMotivation] = useState("");

    function handleFormSubmit(){
        event.preventDefault();
    }

    function handleNameInput(e){
        setInputName(e.currentTarget.value);
    }
    function handleTypeSelect(e){
        setSelectType(e.currentTarget.value);
    }

    function handleTextChange(e){
        setTextAreaMotivation(e.currentTarget.value);
    }
    return <>
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="Enter your name" defaultValue={inputName} onChange={handleNameInput}/>
            <select name="type" defaultValue={selectType} onChange={handleTypeSelect}>
                <option>Choose a type</option>
                <option>client</option>
                <option>merchant</option>
            </select>
            <textarea name="motivation" placeholder="Your motivation to join" defaultValue={textAreaMotivation} onChange={handleTextChange}/>
            <input type="submit" defaultValue="Register" />
        </form>
        <p>
            Your name is {inputName}. You would like to register as {selectType} because {textAreaMotivation}.
        </p>
    </>
}

createRoot(document.querySelector("#react-root")).render(<RegisterForm />);