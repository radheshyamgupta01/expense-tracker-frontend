import React, { useState } from 'react';

const RegistrationForm = () => {
  const [activeField, setActiveField] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // For the password field, add real-time validation
    if (name === 'password') {
      setPassword(value);

      // Example: Validate that the password has at least 8 characters
      if (value.length < 8) {
        setPasswordError('Password must be at least 8 characters long');
      } else {
        setPasswordError('');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>

      {/* Username Input */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="input-field"
          placeholder="Enter your username"
          onFocus={() => setActiveField('username')}
          onBlur={() => setActiveField(null)}
        />
      </div>

      {/* Email Input */}
      {/* (Add similar onFocus and onBlur for highlighting) */}

      {/* Password Input with Real-time Validation */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={`input-field ${passwordError ? 'border-red-500' : ''}`}
          placeholder="Enter your password"
          value={password}
          onChange={handleInputChange}
          onFocus={() => setActiveField('password')}
          onBlur={() => setActiveField(null)}
        />
        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
