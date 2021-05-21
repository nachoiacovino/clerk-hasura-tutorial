import { useState } from 'react'

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='flex my-4 rounded-md shadow-sm'>
        <div className='relative flex items-stretch flex-grow focus-within:z-10'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'></div>
          <input
            type='text'
            name='title'
            id='title'
            className='block w-full border-gray-300 rounded-none focus:ring-blue-500 focus:border-blue-500 rounded-l-md sm:text-sm'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <button className='relative inline-flex items-center px-4 py-2 -ml-px space-x-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
