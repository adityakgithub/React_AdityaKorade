export function Button(props){
    //console.log(props);
    return (
        <button className="ui-button" type={props.type} disabled={props.disabled}>{props.children}</button>
    )
}