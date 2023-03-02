import React,{Component} from "react";
class ClassCounter extends Component {
    // constructor(props){
    //     super(props);
    //     //state 초기값 설정
    //     this.state = {
    //         number: 0
    //     }
    // } 아래와 같이도 사용할 수 있다
    state = {
        number: 0
    }
    render(){
        const { number } = this.state;
        return (
            <div>
                <h2>{number}</h2>
                <button onClick={()=>{
                    this.setState({ number: number+1 })
                }}>+1</button>
                <button onClick={()=>{
                    this.setState({ number: number-1 })
                }}>-1</button>
            </div>
        )
    }
}
export default ClassCounter;