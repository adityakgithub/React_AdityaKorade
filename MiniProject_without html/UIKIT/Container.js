export function Container(props){
    console.log(props.children);
    return (
        
        <div className="ui-container">
            {props.children}
        </div>
        
    )
}