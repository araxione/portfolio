import React, { useState } from "react";

const PasswordProtectedPage = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = process.env.REACT_APP_CORRECT_PASSWORD;

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="password-protected-page">
      {isAuthenticated ? (
        <div className="welcome-message">
          <h1>Under Construction</h1>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="password-form">
          <div className="password-icon">
            <i className="fas fa-lock"></i>
          </div>
          <h2>Please enter the password to access this page:</h2>
          <input
            type="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Enter Password"
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default PasswordProtectedPage;
