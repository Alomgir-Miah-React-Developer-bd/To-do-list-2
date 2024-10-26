import React, { useState } from 'react';

const SideNavbar = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex absolute">
      {/* Sidebar Toggle Button for Small Screens */}
      <button
        className="lg:hidden p-4 text-white bg-gray-800"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`flex flex-col h-screen bg-gray-800 text-white w-64 fixed top-0 lg:relative transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-center h-16">
          <h1 className="text-xl font-bold">ToDoList</h1>
        </div>
        <nav className="flex flex-col mt-4">
          <a
            href="/home"
            className="px-4 py-2 hover:bg-gray-700 transition duration-200"
          >
            Home
          </a>
          <a
            href="/todolist"
            className="px-4 py-2 hover:bg-gray-700 transition duration-200"
          >
            ToDo List
          </a>
          <div className="mt-auto px-4 py-2 border-t border-gray-600">
            <span>{username}</span>
          </div>
        </nav>
      </div>

      {/* Overlay for Sidebar in Small Screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default SideNavbar;
