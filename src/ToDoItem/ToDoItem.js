import './ToDoItem.css'

const ToDoItem = ({item, removeToDoItem}) => {
    //JS문법
    return (
        <li>
            {item}
            <button onClick={removeToDoItem}>Remove</button>
        </li>
        //css문법
        //reurn 안에는 하나의 태그만 있어야 하므로 li태그로 묶어줌
    )

} //파일명과 컴포넌트명은 항상 같게

export default ToDoItem
