import clsx from "clsx";
export default function Link(props) {
    //console.log(props);
    
    const {children, href, disabled,className, ...rest} = props;
    // const clsxRef= clsx({"children":props.children,"href":props.href,"disabled":props.disabled,"className":props.className})
    // console.log(clsxRef.split(" ").join(" "));
    // console.log({clsxRef});
    // console.log({children});
    // console.log(href);
    // console.log({disabled});
    // console.log({rest});
    return <a className={!className?"ui-link":`ui-link ${className}`} href={href} {...rest}>{children}</a>;
}