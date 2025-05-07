import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/Auth.css";
 
function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      alert("Account created successfully! Please log in.");
      navigate("/login");
    }
  };
 
  return (
    <section className="auth-form">
      <h1>Create Your Account</h1>
      <form onSubmit={handleRegister}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
 
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
 
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
 
        <Button type="submit">Register</Button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </section>
  );
}
 
export default RegistrationPage;