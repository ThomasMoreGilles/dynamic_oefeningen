export function Element(props) {
    const {name, value, style} = props;
    if (!value) return;

    const allStyle = {...style, fontSize: "14px"};
    return <div style={allStyle}>{name ? name + " : " : ""}{value}</div>
}