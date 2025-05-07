import React from "react";
import { useLocation } from "react-router-dom";
 
function WelcomePage() {
  const location = useLocation();
  const { name } = location.state || {};
 
  return (
    <section>
      <h1>Welcome, {name || 'Guest'}!</h1>
      <p>Let's sail to the Grand Line!</p>
    </section>
  );
}
 
export default WelcomePage;