import TodoItem from './TodoItem'

const TodoItems = ({items}) => {

  return (
    <>
      <TodoItem todoName={items[0].name} todoDate={items[0].date} />
      <TodoItem todoName={items[1].name} todoDate={items[1].date} />
      <TodoItem todoName={items[2].name} todoDate={items[2].date} />
    </>
  );
};

export default TodoItems;
