import TodoItem from './TodoItem'

const TodoItems = ({items, handleDeleteItem}) => {
  return (
    <>
      {items.map((item, index) =>  
        <TodoItem 
          key={index} 
          todoName={item.name} 
          todoDate={item.date}
          handleDeleteItem={handleDeleteItem}
        />
      )}
    </>
  );
};

export default TodoItems;
