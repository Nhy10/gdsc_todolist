import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoList.css';

const ToDoList = ({toDoItems, removeToDoItem}) => {
    
    return(
        <ul>
        { toDoItems.map((item, index) => (
            <ToDoItem
            key={index}
            item={item}
            removeToDoItem={()=>removeToDoItem(index)}
            />
            
        ))} //jsx 안에서 자바스크립트 문법을 쓰려면 중괄호를 써야된다고 함.
        </ul>
    );
};

export default ToDoList;