import TodoItem from './TodoItem'

const TodoItems = ({items, handleDeleteItem, handleEdit}) => {
  return (
    <>
      {items.map((item, index) =>  
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
