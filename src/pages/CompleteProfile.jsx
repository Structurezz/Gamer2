// src/pages/CompleteProfile.jsx

import React, { useState } from 'react';
import './CompleteProfile.css'; // Import your CSS file

const CompleteProfile = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    idNumber: '',
    idType: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle next step
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend or handle as needed
    console.log(formData);
  };

  return (
    <div className="completeProfilePage">
      <h2>Complete Your Profile</h2>
      <p>Please fill in your information to unlock all features.</p>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h3>Step 1: Account Information</h3>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3>Step 2: ID Verification</h3>
            <div>
              <label htmlFor="idType">ID Type:</label>
              <select id="idType" name="idType" value={formData.idType} onChange={handleChange} required>
                <option value="">Select ID Type</option>
                <option value="passport">Passport</option>
                <option value="drivers_license">Driver's License</option>
                <option value="national_id">National ID</option>
              </select>
            </div>
            <div>
              <label htmlFor="idNumber">ID Number:</label>
              <input type="text" id="idNumber" name="idNumber" value={formData.idNumber} onChange={handleChange} required />
            </div>
            <button type="button" onClick={() => setStep(1)}>Back</button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CompleteProfile;
