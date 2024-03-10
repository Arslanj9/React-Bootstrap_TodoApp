import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container"
import { useState } from "react"; 

const App = () => {
  let innitialItems = [
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

  const [ items, setItems ] = useState(innitialItems)

  const onSubmit = (todoName, todoDate) => {
  
    var dateParts = todoDate.split("-");
    var formattedDate = dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0];

    const newTodoItems = [...items, {name: todoName, date: formattedDate}]
    setItems(newTodoItems)
  }

  



  return (
    <Container>
      <AppName />
      <AddTodo handleSubmit={onSubmit}/>
      <TodoItems items={items} />
    </Container>
  );
};

export default App;
