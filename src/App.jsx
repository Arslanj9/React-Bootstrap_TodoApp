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

      
    </center>
  );
}

export default App;
