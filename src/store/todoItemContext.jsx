import { createContext, useReducer } from "react";

export const todoItemContext = createContext([]);


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
      
    } else if (action.type === 'DELETE_ITEM') {
      newItemsState = itemsState.filter((obj) => obj.name !== action.payload.name);

    } else if(action.type === 'EDIT_ITEM') {

    newItemsState = itemsState.map((todo) => {
      return todo.name === action.payload.name ? {...itemsState, name: action.payload.newText, date: todo.date } : todo
    })
    }

    return newItemsState;
}


const TodoItemContextProvider = ({ children }) => {

  const [itemsState, dispatchItems] = useReducer(itemsReducer, itemsInnitialState);

  const onSubmit = (todoName, todoDate) => {
    const newTodoItems = {
      type: "ADD_ITEM",
      payload: {
        name: todoName,
        date: todoDate,
      },
    };
    dispatchItems(newTodoItems);
  };

  const handleDeleteItem = (todoName) => {
    const deleteTodoItem = {
      type: "DELETE_ITEM",
      payload: {
        name: todoName,
      },
    };
    dispatchItems(deleteTodoItem);
  };

  const handleEdit = (todoName, newText) => {
    const editTodoItem = {
      type: "EDIT_ITEM",
      payload: {
        name: todoName,
        newText,
      },
    };
    dispatchItems(editTodoItem);
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
        {children}
    </todoItemContext.Provider>
 )
};

export default TodoItemContextProvider