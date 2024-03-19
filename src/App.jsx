import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import WelcomeMsge from "./components/WelcomeMsge";
import TodoItemContextProvider from "./store/TodoItemContext";

const App = () => {

  return (
    <TodoItemContextProvider>
      <Container>
        <AppName />
        <AddTodo />
        <WelcomeMsge />
        <TodoItems />
      </Container>
    </TodoItemContextProvider>
  );
  
};

export default App;
