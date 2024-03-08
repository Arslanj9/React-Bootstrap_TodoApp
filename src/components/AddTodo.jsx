import styles from './AddTodo.module.css'

const AddTodo = () => {
  return (
    <>
      <div class="row container mt-2 mx-5">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" className={`${styles.AddBtn} btn btn-success`}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
