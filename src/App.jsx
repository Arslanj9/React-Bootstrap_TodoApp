import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import WelcomeMsge from "./components/WelcomeMsge";
import { useReducer, useState } from "react";
import { todoItemContext } from "./store/todoItemContext";


const itemsInnitialState = [
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

const itemsReducer = (itemsState, action) => {
  
    let newItemsState = itemsState;
    if(action.type === 'ADD_ITEM') {
      let dateParts = action.payload.date.split("-");
      let formattedDate = dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0];
  
      newItemsState = [...itemsState, { name: action.payload.name, date: formattedDate }];
      console.log(newItemsState)
    }else if (action.type === 'DELETE_ITEM') {
      newItemsState = itemsState.filter((obj) => obj.name !== action.payload.name);
    }
    return newItemsState;
}

const App = () => {

  const [ itemsState, dispatchItems ] = useReducer(itemsReducer, itemsInnitialState)


  const onSubmit = (todoName, todoDate) => {
    const newTodoItems = {
      type: "ADD_ITEM",
      payload: {
        name: todoName,
        date: todoDate
      }
    }
    dispatchItems(newTodoItems)
  };


  const handleDeleteItem = (todoName) => {

    const deleteTodoItem = {
      type: "DELETE_ITEM",
      payload: {
        name: todoName
      }
    }

    dispatchItems(deleteTodoItem)
  };

  const handleEdit = (todoName, newText) => {
    // setItems((prevTodos) =>
    //   prevTodos.map((todo) =>
    //     todo.name == todoName ? { ...todo, name: newText } : todo
    //   )
    // );
  };

  return (
    <todoItemContext.Provider 
      value={{
        allItems: itemsState, 
        deleteItem: handleDeleteItem, 
        addItem: onSubmit,
        editItem: handleEdit
      }}
    >
      <Container>
        <AppName />
        <AddTodo />

        {itemsState.length == 0 ? (<WelcomeMsge />) : (<TodoItems />)}

      </Container>
    </todoItemContext.Provider>
  );
};

export default App;
