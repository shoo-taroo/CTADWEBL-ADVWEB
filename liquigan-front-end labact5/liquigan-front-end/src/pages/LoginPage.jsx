import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/Auth.css";
 
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/welcome", { state: { name: email.split("@")[0] } });
    }
  };
 
  return (
    <section className="auth-form">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
 
        <Button type="submit">Login</Button>
        <p>
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </form>
    </section>
  );
}
 
export default LoginPage;