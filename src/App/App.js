import { useState } from "react";
import './App.css'; //css 연결하는 방법
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() { //첫글자 대문자
  const [toDoItems, setToDoItems] = useState( [] );

  const addToDoItem = (item) => {
    setToDoItems([...toDoItems, item])
  }

  const removeToDoItem = (index) => {
    const newToDoitems = [...toDoItems];
    newToDoitems.splice(index, 1)
    setToDoItems(newToDoItems);
  }

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route
          path="/"
          element={
            <>
            <ToDoForm addToDoItem={addToDoItem} />
            <ToDoList toDoItems={toDoItems} removeToDoItem={removeToDoItem} />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App; //외부에서도 App이라고 하는 함수를 이용할 수 있도록 함.

