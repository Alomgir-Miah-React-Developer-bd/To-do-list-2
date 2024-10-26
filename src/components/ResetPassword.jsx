import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
    setSuccessMessage('');
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
    setError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Call your reset password function here with newPassword
      setSuccessMessage('Password reset successfully.');
      setEmail('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        navigate('/login'); // Redirect to login after 3 seconds
      }, 3000);
    } catch (error) {
      setError('Failed to reset password. Please try again.');
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-md transform transition-transform duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={handlePasswordChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter new password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Confirm new password"
              required
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Reset Password
          </button>
        </form>
        {successMessage && (
          <p className="text-green-500 text-center font-medium mt-4">{successMessage}</p>
        )}
        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-lg font-normal text-black hover:text-indigo-600 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-2 hover:underline"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
