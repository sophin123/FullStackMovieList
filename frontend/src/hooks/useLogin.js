import { useState } from "react";
import { logIn } from "../context/AuthContext/action";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const loginHandler = async (email, password) => {
    const data = { email, password };

    setLoading(true);
    setError(null);

    const response = await fetch("/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (response.ok) {
      setError(null);
      localStorage.setItem("user", JSON.stringify(json));

      logIn(dispatch, json);

      setLoading(true);

      console.log(json);
    }

    if (!response.ok) {
      setLoading(false);
      setError(json.msg);
    }
  };

  return { loginHandler, error, loading };
};
