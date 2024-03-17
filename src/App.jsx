import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container"
import WelcomeMsge from './components/WelcomeMsge'
import { useState } from "react"; 

const App = () => {
  // let innitialItems = [
  //   {
  //     name: "Buy Milk",
  //     date: "23/3/2024"
  //   }, 
  //   {
  //     name: "Go to Gym",
  //     date: "13/2/2024"
  //   },
  //   {
  //     name: "Have Dinner",
  //     date: "3/3/2024"
  //   }
  // ];
  // const [ items, setItems ] = useState(innitialItems)

  const [ items, setItems ] = useState([])

  const onSubmit = (todoName, todoDate) => {
  
    var dateParts = todoDate.split("-");
    var formattedDate = dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0];

    const newTodoItems = [...items, {name: todoName, date: formattedDate}]
    setItems(newTodoItems)
  }

  const handleDeleteItem = (todoName) => {
    const newItems = items.filter(obj => obj.name !== todoName)
    setItems(newItems) 
  }

  const handleEdit = (todoName, newText) => {
    setItems((prevTodos) => prevTodos.map((todo) => todo.name == todoName ? {...todo, name: newText} : todo))
  }

  return (
    <Container>
      <AppName />
      <AddTodo handleSubmit={onSubmit}/>

      { items.length == 0 ? <WelcomeMsge /> : <TodoItems items={items} handleDeleteItem={handleDeleteItem} handleEdit={handleEdit}/>} 
      {/* We can also achieve same results by this method given below */}
      {/* --------- Logical AND operator --------- */}
      {/* { items.length == 0 && <WelcomeMsge/> }
      <TodoItems items={items} /> */}
    </Container>
  );
};

export default App;
