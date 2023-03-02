import './App.css';
import Hello from "./components/Hello";
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Hello name="green" message="안녕" isSpecial/> {/* 값을 주지 않으면 true가 기본값 */}
        <Hello name="blue" message="반가워" isSpecial/>
        <Hello name="yellow" message="재미있어" isSpecial={false}/>
        <Hello message="하하하"/>
      </Wrapper>
      
    </div>
  );
}

export default App;
