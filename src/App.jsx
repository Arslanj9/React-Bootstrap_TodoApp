import AppName from './components/AppName'
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <center>
      <AppName />
      <AddTodo />
      

      <div class="row mx-5">
        <div class="col-6">
          Buy Milk
        </div>
        <div class="col-4">
          23/3/2024
        </div>
        <div class="col-2">
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>

      <div class="row mx-5">
        <div class="col-6">
          Go to College
        </div>
        <div class="col-4">
          5/10/2024
        </div>
        <div class="col-2">
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
    </center>
  );
}

export default App;
