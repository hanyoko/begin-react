import React,{Component} from 'react';
class ClassCounter2 extends Component {
    state = {
        number: 0
    }
    handleIncrease = () => {
        this.setState({number: this.state.number+1})
    }
    render(){
        const { number } = this.state;
        return(
            <div>
                <h2>{number}</h2>
                {/* <button onClick={()=>{
                    this.setState({number: number+1})
                }}>+1</button> */}
                <button onClick={this.handleIncrease}>+1</button>
            </div>
        )
    }
}
export default ClassCounter2; 