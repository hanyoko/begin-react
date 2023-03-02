import './App.css';
import ClassComponent2 from './components/ClassComponent2.js';
import FuncComponent2 from './components/FuncComponent2.js';


function App() {
  return (
    //{ name: "green", children: "안녕하세요"} => props
    <div className="App">
      <FuncComponent2 name="green">안녕하세요</FuncComponent2>
      <ClassComponent2></ClassComponent2>
    </div>
  );
}

export default App;
