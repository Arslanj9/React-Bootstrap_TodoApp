import styles from './TodoItem.module.css'

const TodoItem1 = ({todoName, todoDate}) => {

  let itemDelete = (todoName) => {
    console.log(`${todoName} deleted`)
  }

  return (
    <>
      <div className="row container mt-2 text-center">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button 
            type="button" 
            className={`${styles.deleteBtn} btn btn-danger`}
            onClick={() => itemDelete(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem1;
