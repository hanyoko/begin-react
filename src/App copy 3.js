import './App.css';
import ClassCounter from './components/ClassCounter';
// import ClassComponent from './components/ClassComponent.js';
// import FuncComponent from './components/funcComponent.js';

function App() {
  return (
    <div className="App">
      {/* <ClassComponent  name="green">안녕하세요</ClassComponent> */}
      {/* 안녕하세요 (태그 사이에 있는 값) 자리에 있는 값을 불러올 때 children 을 사용하면 값을 불러올 수 있다. */}
      {/* <ClassComponent  name={3}>안녕하세요</ClassComponent> */}
      {/* 숫자를 넣을 때는 중괄호로 감싸야한다. */}
      {/* <ClassComponent>안녕하세요</ClassComponent>
      <FuncComponent name="green">하하하하하하하하</FuncComponent> */}
      <ClassCounter />
    </div>
  );
}

export default App;
