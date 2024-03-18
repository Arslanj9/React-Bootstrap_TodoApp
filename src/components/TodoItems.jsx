import TodoItem from './TodoItem'
import { useContext } from 'react';
import { todoItemContext } from '../store/todoItemContext';


const TodoItems = ({handleDeleteItem, handleEdit}) => {

  const itemsFromContext = useContext(todoItemContext);
  console.log(itemsFromContext)

  return (
    <>
      {itemsFromContext.map((item, index) =>  
        <TodoItem 
          key={index} 
          todoName={item.name} 
          todoDate={item.date}
          handleDeleteItem={handleDeleteItem}
          handleEdit={handleEdit}
        />
      )}
    </>
  );
};

export default TodoItems;
