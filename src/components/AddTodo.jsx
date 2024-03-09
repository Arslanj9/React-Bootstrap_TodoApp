import styles from './AddTodo.module.css'

const AddTodo = () => {

  const Usertyping = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <div className="row container mt-2 text-center">
        <div className="col-6">
          <input 
            type="text" 
            placeholder="Enter Todo" 
            onChange={(e) => Usertyping(e)}
          />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className={`${styles.AddBtn} btn btn-success`}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
