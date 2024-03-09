import styles from './TodoItem.module.css'

const TodoItem1 = ({todoName, todoDate}) => {

  let itemDelete = (event) => {
    console.log(`${todoName} deleted`)
    console.log(event)

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
            onClick={(event) => itemDelete(event)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem1;
