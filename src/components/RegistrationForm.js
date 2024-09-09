import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthdate: '',
      errors: {}
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password, confirmPassword } = this.state;
    const errors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = "Email is required.";
    } else if (!emailPattern.test(email)) {
      errors.email = "Please enter a valid email (must contain '@' and '.').";
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      errors.password = "Password is required.";
    } else if (!passwordPattern.test(password)) {
      errors.password =
        "Password must be at least 8 characters, include a mix of uppercase, lowercase, numbers, and special characters.";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(errors).length === 0) {
      alert("Registration Successful!");
      this.setState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthdate: '',
        errors: {}
      });
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { username, email, password, confirmPassword, birthdate, errors } = this.state;

    return (
      <div className="register-container">
        <div className="form-box">
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
                className={errors.username ? 'error' : ''}
              />
              {errors.username && <p className="error-text">{errors.username}</p>}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="birthdate"
                value={birthdate}
                onChange={this.handleChange}
                className={errors.birthdate ? 'error' : ''}
              />
              {errors.birthdate && <p className="error-text">{errors.birthdate}</p>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        <footer className="footer">
          <p>Made by Styris TE-IT-A-19</p>
        </footer>
      </div>
    );
  }
}

export default RegistrationForm;
