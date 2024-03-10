import { useState } from 'react';
import styles from './AddTodo.module.css'

const AddTodo = ({ handleSubmit }) => {

  const [ todoName, setTodoName ] = useState("")
  const [ todoDate, setTodoDate ] = useState("")

  const handleName = (e) => {
    setTodoName(e.target.value)
  }

  const handleDate = (e) => {
    setTodoDate(e.target.value)
  }

  const handleAddBtn = () => {
    if(todoName == "" || todoDate == ""){
      console.log(`Please enter something`)
    }else {
      handleSubmit(todoName, todoDate)
      setTodoName("")
      setTodoDate("")
    }
  }

  return (
    <>
      <div className="row container mt-2 text-center">
        <div className="col-6">
          <input 
            type="text" 
            placeholder="Enter Todo" 
            value={todoName}
            onChange={handleName}
          />
        </div>
        <div className="col-4">
          <input 
            type="date" 
            value={todoDate}
            onChange={handleDate}
          />
        </div>
        <div className="col-2">
          <button 
            type="button" 
            className={`${styles.AddBtn} btn btn-success`}
            onClick={handleAddBtn}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
