import { gql, useQuery } from '@apollo/client'

import SingleTodo from '../components/SingleTodo'

export const GET_TODOS = gql`
  query GetTodos {
    todos(order_by: { created_at: desc }) {
      id
      title
      completed
    }
  }
`;

const TodoList = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return "Loading...";

  if (error) return <>{console.log(error)}</>;

  return (
    <div className='overflow-hidden bg-white rounded-md shadow'>
      <ul className='divide-y divide-gray-200'>
        {data?.todos.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
