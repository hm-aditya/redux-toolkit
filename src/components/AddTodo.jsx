import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from "../features/todo/todoSlice"
const AddTodo = () => {
    const[input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
    <form onSubmit={addTodoHandler} className='flex items-center space-x-3 mt-12'>
        <input type="text" 
        className='bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='Add a todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'
         className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        
        >
            Add
        </button>
    </form>
  )
}

export default AddTodo