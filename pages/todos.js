import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

const todos = () => {
  return (
    <div className='flex justify-center px-4 mx-auto mt-32 max-w-7xl sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto lg:w-4/12'>
        <h1 className='text-3xl font-bold '>My todos!</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default todos;
