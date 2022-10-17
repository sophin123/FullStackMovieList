import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUpHandler, error, loading } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signUpHandler(email, password);
    setEmail("");
    setPassword("");

    console.log(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={loading}>Sign Up</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUp;
