import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";


const Todos = () => {
  const todos=useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
       <div className="text-2xl">Todos</div>
       {todos.map((todo) => (
        <li key={todo.id}
        className="flex items-center justify-between space-x-3 mt-12 bg-gray-900 text-white font-bold py-2 px-4 rounded"
        >
            {todo.text} 
            <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
       ))}
      <br />
    </>
  );
};

export default Todos;
