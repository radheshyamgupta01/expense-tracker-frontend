import React from 'react';

const UsernameInput = () => {
  return (
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter your username"
      />
    </div>
  );
};

export default UsernameInput;
