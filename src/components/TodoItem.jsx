import styles from './TodoItem.module.css'

const TodoItem1 = ({todoName, todoDate}) => {

  return (
    <>
      <div class="row container mt-2 mx-5">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" className={`${styles.deleteBtn} btn btn-danger`}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem1;
