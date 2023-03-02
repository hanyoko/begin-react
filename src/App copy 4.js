import './App.css';
import FuncComponent2 from './components/FuncComponent2.js';


function App() {
  return (
    //{ name: "green", children: "안녕하세요"} => props
    <div className="App">
      <FuncComponent2 name="green">안녕하세요</FuncComponent2>
    </div>
  );
}

export default App;
