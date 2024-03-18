import { useState, useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdDelete, MdPublishedWithChanges } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { todoItemContext } from '../store/todoItemContext'
 
const TodoItem1 = ({ todoName, todoDate}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todoName);

  const { deleteItem, editItem } = useContext(todoItemContext)

  const handleEditBtn = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveBtn = () => {
    setIsEditing(false);
    editItem(todoName, newText);
  };

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
            <div className="col-6">{todoName}</div>
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
