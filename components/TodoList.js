import SingleTodo from '../components/SingleTodo'

const TodoList = () => {
  const todos = [
    { title: "hello", id: "1", completed: false },
    { title: "hello 2", id: "2", completed: false },
    { title: "hello 3", id: "3", completed: true },
  ];

  return (
    <div className='overflow-hidden bg-white rounded-md shadow'>
      <ul className='divide-y divide-gray-200'>
        {todos.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
