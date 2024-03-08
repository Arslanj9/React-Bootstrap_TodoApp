import TodoItem from './TodoItem'

const TodoItems = ({items}) => {


  return (
    <>
      {items.map((item, index) =>  
        <TodoItem key={index} todoName={item.name} todoDate={item.date}/>
      )}
    </>
  );
};

export default TodoItems;
