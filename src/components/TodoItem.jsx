import { useState, useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdDelete, MdPublishedWithChanges } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { todoItemContext } from '../store/TodoItemContext'
 
const TodoItem1 = ({ todoName, todoDate, todoCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todoName);
  const [newTodoCompleted, setNewTodoCompleted] = useState(true)

  const { deleteItem, editItem, completedItem } = useContext(todoItemContext)

  const handleEditBtn = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveBtn = () => {
    setIsEditing(false);
    editItem(todoName, newText);
  };

  const handleCompleted = () => {
    setNewTodoCompleted(!newTodoCompleted)
    completedItem(todoName, newTodoCompleted)
  }

  const completedStyles = {
    textDecoration: todoCompleted ? "line-through" : "none",
    opacity: todoCompleted ? 0.5 : 1
  }

  return (
    <>
      <div className="row container mt-2 text-center">
        {isEditing == true ? (
          <div>
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <button onClick={handleSaveBtn} className="btn btn-success m-2">
              <MdPublishedWithChanges />
            </button>
          </div>
        ) : (
          <div className="row container mt-2 text-center">
            <input 
              className="col-1" 
              style={{width: "1em", height: "1.25em", marginLeft: '60px'}} 
              type="checkbox" 
              onClick={handleCompleted}
            />
            <div className="col-5" style={completedStyles}>{todoName}</div>
            <div className="col-4">{todoDate}</div>
            <div className="col-2">
              <button
                onClick={handleEditBtn}
                className="btn btn-warning"
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className={`${styles.deleteBtn} btn btn-danger`}
                onClick={() => deleteItem(todoName)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoItem1;
