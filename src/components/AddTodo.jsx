import { useRef, useContext } from 'react';
import styles from './AddTodo.module.css'
import { IoMdAddCircle } from "react-icons/io";
import {todoItemContext} from '../store/TodoItemContext'

const AddTodo = () => {

  const todoNameElement = useRef()
  const todoDateElement = useRef()

  const submitFromContext = useContext(todoItemContext)
  const handleSubmit = submitFromContext.addItem

  const handleAddBtn = () => {
    if(todoNameElement == "" || todoDateElement == ""){
      console.log(`Please enter something`)
    }else {
      handleSubmit(todoNameElement.current.value, todoDateElement.current.value)
      todoNameElement.current.value = "";
      todoDateElement.current.value = "";
    }
  }

  return (
    <>
      <div className="row container mt-2 text-center">
        <div className="col-6">
          <input 
            type="text" 
            placeholder="Enter Todo"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input 
            type="date" 
            ref={todoDateElement}
          />
        </div>
        <div className="col-2">
          <button 
            type="button" 
            className={`${styles.AddBtn} btn btn-success`}
            onClick={handleAddBtn}
          >
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
