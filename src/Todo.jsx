import React, { useState } from 'react';
import Task from './Task';

function Todo() {
  const [data, setData] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (data.trim()) {
      const newTask = { text: data, completed: false };
      setTasks([...tasks, newTask]);
      setData("");
    }
  };

  const deleteHandler = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const checkHandler = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const clearHandler = () => {
    setTasks([]);
  };

  const handleFilter = (status) => {
    setFilter(status);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  }).filter(task => task.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6">
      <h3 className='mb-6 text-2xl font-bold text-blue-600'>THINGS TO DO</h3>
      <form onSubmit={addTask}>
        <input
          type='text'
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder='Add a task'
          className='m-2 p-2 border border-gray-300 rounded-md w-full md:w-1/4'
        />
        <Task tasks={filteredTasks} deleteHandler={deleteHandler} checkHandler={checkHandler} />
        <div className="mt-4 space-x-2">
          <button type="submit" className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>+</button>
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder='Search tasks'
            className='p-2 border border-gray-300 rounded-md'
          />
          <button type="button" className='px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600' onClick={() => handleFilter("all")}>All</button>
          <button type="button" className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600' onClick={() => handleFilter("active")}>Active</button>
          <button type="button" className='px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600' onClick={() => handleFilter("completed")}>Completed</button>
          <button type="button" className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600' onClick={clearHandler}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default Todo;
