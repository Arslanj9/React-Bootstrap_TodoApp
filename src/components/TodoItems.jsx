import TodoItem from './TodoItem'
import { useContext } from 'react';
import { todoItemContext } from '../store/todoItemContext';


const TodoItems = () => {

  const {allItems} = useContext(todoItemContext);

  return (
    <>
      {allItems.map((item, index) =>  
        <TodoItem 
          key={index} 
          todoName={item.name} 
          todoDate={item.date}
        />
      )}
    </>
  );
};

export default TodoItems;
