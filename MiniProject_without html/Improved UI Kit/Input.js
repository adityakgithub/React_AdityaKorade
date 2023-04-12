import clsx from "clsx";

export default function Input(props) {
    //console.log(props);
    // let clsxcls=clsx({"className":props.className});
    // let clsxtype=clsx({"type":props.type});
    const {className,type,...rest}= props;
    // let className=props.className;
    // if(!className){
    //     className="ui-textfield"
    // }
    // console.log(className);
    // let type = props.type;
    // if (!type){
    //     type = "text";
    // }
    // console.log(type);
    // console.log(props);
    // const {...rest}=props;

   // return <input className="ui-textfield" type={type} />;
    return <input className={!className?"ui-textfield":`ui-textfield ${className}`} type={!type?"text":type} {...rest} />;
}