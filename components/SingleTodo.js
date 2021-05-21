import { gql, useMutation } from '@apollo/client'
import { TrashIcon } from '@heroicons/react/solid'

import { GET_TODOS } from './TodoList'

const DELETE_TODO = gql`
  mutation DeleteTodo($id: uuid!) {
    delete_todos_by_pk(id: $id) {
      id
      title
    }
  }
`;

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: uuid!, $completed: Boolean!) {
    update_todos_by_pk(
      pk_columns: { id: $id }
      _set: { completed: $completed }
    ) {
      id
      completed
    }
  }
`;

const SingleTodo = ({ todo }) => {
  const [deleteTodoMutation] = useMutation(DELETE_TODO);
  const [toggleTodoMutation] = useMutation(TOGGLE_TODO);

  const deleteTodo = () => {
    deleteTodoMutation({
      variables: { id: todo.id },
      optimisticResponse: true,
      update: (cache) => {
        const data = cache.readQuery({ query: GET_TODOS });
        const todos = data.todos.filter(({ id }) => id !== todo.id);
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos },
        });
      },
    });
  };

  const toggleTodo = () => {
    toggleTodoMutation({
      variables: { id: todo.id, completed: !todo.completed },
      optimisticResponse: true,
      update: (cache) => {
        const data = cache.readQuery({ query: GET_TODOS });
        const todos = data.todos.map((t) => {
          if (t.id === todo.id) {
            return { ...t, completed: !todo.completed };
          }
          return t;
        });

        cache.writeQuery({
          query: GET_TODOS,
          data: { todos },
        });
      },
    });
  };

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
