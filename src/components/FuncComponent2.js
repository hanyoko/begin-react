import React,{useState} from 'react';
// const FuncComponent2 = (props) => {
//     //{ name: "green", children: "안녕하세요"} => props
//     // return(
//     //     <div>{props.name} {props.children}</div>
//     // )
//     const { name, children } = props;   //구조분해할당
//     return(
//         <div>{name} {children}</div>
//     )
    
// }
const FuncComponent2 = ({ name, children }) => {
    const [ number, setNumber ] = useState(0);
    // let number2 = 0;
    const onAddNumber = () => {
        setNumber(number+1)
    }
    // const onAddNumber2 = () => {
    //     number2++;
    //     console.log(number2);
    // }
    return (
        <div>   
            <h2>{number}<button onClick={onAddNumber}>+1</button></h2>
            {name} {children}
        </div>
    )
}
export default FuncComponent2;