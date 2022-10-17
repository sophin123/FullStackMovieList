import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { logoutHandler } = useLogout();

  const { user } = useAuthContext();

  const logout = (e) => {
    // e.preventdefault();
    logoutHandler();
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Movies List</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={logout}>Logout</button>
            </div>
          )}

          {!user && (
            <div>
              <Link to={"/login"}>Login</Link>
              <Link to={"/signup"}>SignUp</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
