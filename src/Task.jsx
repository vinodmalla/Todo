import React from 'react';

function Task({ tasks, deleteHandler, checkHandler }) {
  return (
    <div className="mt-4">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index} className="flex items-center mb-2 p-2 border-b border-gray-200">
            <label className="flex items-center w-full">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => checkHandler(index)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className={`ml-2 ${task.completed ? "line-through text-gray-500" : ""}`}>{task.text}</span>
              <button 
                onClick={() => deleteHandler(index)} 
                className="ml-96 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
              >
                X
              </button>
            </label>
          </div>
        ))
      ) : (
        <div className="text-gray-500">No tasks available</div>
      )}
    </div>
  );
}

export default Task;
