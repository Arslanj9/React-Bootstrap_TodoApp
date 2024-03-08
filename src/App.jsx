import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

const App = () => {
  let items = [
    {
      name: "Buy Milk",
      date: "23/3/2024"
    }, 
    {
      name: "Go to Gym",
      date: "13/2/2024"
    },
    {
      name: "Have Dinner",
      date: "3/3/2024"
    }
  ];

  return (
    <center>
      <AppName />
      <AddTodo />
      <TodoItems items={items} />
    </center>
  );
};

export default App;
