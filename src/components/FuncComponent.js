import React from "react";

const FuncComponent = (props) => {
    const { name, children } = props;
    return (
        <div>{name} {children}</div>
        
    )
}
FuncComponent.defaultProps = {
    name: "aaaaa"
}
export default FuncComponent;