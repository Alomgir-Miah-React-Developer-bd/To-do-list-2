import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
 // Import the styles for animation

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFeedbackMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    if (formData.email && formData.password) {
      setFeedbackMessage('Login successful!');
      // Redirect to SideNavbar/dashboard
      setTimeout(() => {
        navigate('/'); // Redirect to SideNavbar
      }, 2000);
    } else {
      setFeedbackMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-animated">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {feedbackMessage && (
          <p className="text-red-600 text-center mb-4">{feedbackMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Enter your password"
              required
            />
          </div>
          <Link className='forgot mt-8' to='/ResetPassword'>Reset Password</Link>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <button onClick={() => navigate('/signup')} className="text-blue-600 hover:underline">Sign Up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
