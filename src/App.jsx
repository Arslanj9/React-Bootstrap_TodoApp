import AppName from './components/AppName'
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

const App = () => {
  return (
    <center>
      <AppName />
      <AddTodo />
      
      <TodoItem todoName="Buy Milk" todoDate="4/2/2023" />
      <TodoItem todoName="Go for run" todoDate="5/2/2023" />
      <TodoItem todoName="Buy Food" todoDate="5/2/2023" />
      <TodoItem todoName="Go to University" todoDate="5/2/2023" />
      <TodoItem todoName="Have a good day" todoDate="5/2/2023" />

      {/* <div class="row container mt-2 mx-5">
        <div class="col-6">
          Go to College
        </div>
        <div class="col-4">
          5/10/2024
        </div>
        <div class="col-2">
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div> */}
    </center>
  );
}

export default App;
