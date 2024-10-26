import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, id: Date.now() }]);
      setNewTask('');
    }
  };

  // Enable edit mode
  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditingText(task.text);
  };

  // Save edited task
  const saveTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, text: editingText } : task)));
    setEditingTask(null);
    setEditingText('');
  };

  // Remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 flex flex-col items-center p-4">
      {/* Header */}
      <header className="text-3xl font-bold text-white mb-10 animate-fade-in text-center">
        My To-Do List
      </header>

      {/* To-Do List Section */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
        {/* Input and Add Button */}
        <div className="flex flex-col md:flex-row items-center border-b border-gray-300 pb-4 mb-4 space-y-4 md:space-y-0">
          <input
            type="text"
            className="flex-grow p-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="w-full md:w-auto mt-2 md:mt-0 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none transition ease-in duration-200"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-50 p-4 mb-2 rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between hover:bg-gray-100 transition duration-300"
          >
            {editingTask === task.id ? (
              // Edit Mode
              <input
                type="text"
                className="flex-grow p-2 border rounded-lg focus:outline-none mr-4"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              // Display Mode
              <span className="text-gray-700">{task.text}</span>
            )}
            <div className="flex space-x-2 mt-2 md:mt-0">
              {editingTask === task.id ? (
                <button
                  onClick={() => saveTask(task.id)}
                  className="text-green-500 hover:text-green-700 transition duration-200"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEditing(task)}
                  className="text-blue-500 hover:text-blue-700 transition duration-200"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => removeTask(task.id)}
                className="text-red-400 hover:text-red-600 transition duration-200"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
