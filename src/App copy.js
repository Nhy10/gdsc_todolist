import './App.css'; //css 연결하는 방법

function App() { //첫글자 대문자
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          안녕하세요
        </h1>

        <div className="part">구역을 나눠줍니다</div>

        <input type="text" />
        <button>버튼1</button>
        <input type="button" value="안녕하세요"/>
        
        <form>
          <input type="text" />
          <button>버튼1</button>
          <input type="button" value="안녕하세요"/>
        </form>
        
      </header>
    </div>
  );
}

export default App; //외부에서도 App이라고 하는 함수를 이용할 수 있도록 함.

