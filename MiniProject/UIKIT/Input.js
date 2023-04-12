export function Input(props){
    console.log(props?.type??"text");
    return (
        <input className="ui-textfield" type={props?.type??"text"} name={props.name} placeholder={props.placeholder}></input>
    )
}