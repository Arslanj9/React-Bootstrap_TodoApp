const TodoItem1 = (props) => {

  let todoName = ""
  let todoDate = "23/4/2024" 

  return (
    <>
      <div class="row container mt-2 mx-5">
        <div class="col-6">{props.todoName}</div>
        <div class="col-4">{props.todoDate}</div>
        <div class="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem1;
