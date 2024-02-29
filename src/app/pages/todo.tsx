"use client"
import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };


  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4 text-black">To-Do List</h1>
      <div className="flex mb-4">
        <input 
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 border border-black p-2 rounded-md mr-2 text-black"
          onKeyUp={(e)=>handleKeyPress(e)}  
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 rounded-md">
          Add
        </button>
      </div>
      <ul className="list-none p-0">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b border-gray-300">
            <span className="text-black">{todo}</span>
            <button onClick={() => removeTodo(index)} className="text-red-500">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}