import { useState } from 'react';
import styles from './TodoItem.module.css'

const TodoItem1 = ({todoName, todoDate, handleDeleteItem, handleEdit}) => {

  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todoName)
  
  const handleEditBtn = () => {
    setIsEditing(!isEditing)
  }

  const handleSaveBtn = () => {
    setIsEditing(false)
    handleEdit(todoName, newText)
  }


  return (
    <>
      <div className="row container mt-2 text-center">
        {isEditing == true ?
          <div>
            <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)}/>
            <button onClick={handleSaveBtn}>Save</button>
          </div>:
          <div>
            <div className="col-6">{todoName}</div>
            <button onClick={handleEditBtn}>Edit</button>
          </div>
        }

        
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button 
            type="button" 
            className={`${styles.deleteBtn} btn btn-danger`}
            onClick={() => handleDeleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem1;
