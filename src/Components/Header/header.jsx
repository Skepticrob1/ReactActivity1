import React, { useState } from "react";
import './Header.css';

const Header = () => {
  // State to manage form input values and errors
  const [formData, setFormData] = useState({
    name: 'vv',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate the form
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // No errors, proceed with form submission
      alert("Form submitted successfully!");
      // Reset form (optional)
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    } else {
      // Set errors and display alert
      setErrors(validationErrors);
      alert("Please fix the errors in the form.");
    }
  };

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className='form-control'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className='form-control'>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <div className='form-control'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

// mao ni e import sa app.js
export default Header;