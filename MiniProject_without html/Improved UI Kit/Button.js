export default function Button(props) {
    const {children, type, disabled,className,...rest} = props;

    return <button className={!className?"ui-button":`ui-button ${className}`} type={type} disabled={disabled} {...rest}>{children}</button>;
}