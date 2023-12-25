import React from 'react';

const PasswordInput = () => {
  return (
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter your password"
      />
    </div>
  );
};

export default PasswordInput;
