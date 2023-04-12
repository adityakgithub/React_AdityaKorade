export function Link(props){
    // console.log(props)
    return (
        <a href={props.href} className="ui-link">
            {props.children}
        </a>
    )
}