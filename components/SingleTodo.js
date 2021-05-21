import { TrashIcon } from '@heroicons/react/solid'

const SingleTodo = ({ todo }) => {
  const deleteTodo = () => {};
  const toggleTodo = () => {};

  return (
    <li key={todo.id} className='flex justify-between px-6 py-4'>
      <div>
        <input
          id={todo.id}
          name='completed'
          type='checkbox'
          checked={todo.completed}
          onChange={toggleTodo}
          className='w-4 h-4 mr-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
        />
        <label
          htmlFor={todo.id}
          className={todo.completed ? "line-through text-gray-400" : ""}
        >
          {todo.title}
        </label>
      </div>
      <TrashIcon
        className='w-5 h-5 text-gray-500 cursor-pointer'
        onClick={deleteTodo}
      />
    </li>
  );
};

export default SingleTodo;
