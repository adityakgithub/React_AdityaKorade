export default function Container(props) {
    //console.log(props);
    const {children,className,...rest}=props;
    // console.log({children});
    // console.log({...rest})
    // const {className,...rest2}={...rest};
    // console.log(className);
    // console.log({...rest2})
    
   return <div className={"ui-container"+className} {...rest}>{children}</div>
}