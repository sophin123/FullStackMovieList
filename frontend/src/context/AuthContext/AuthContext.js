import { createContext, useEffect, useReducer } from "react";
import { logIn, LOGIN, LOGOUT, SIGNUP } from "./action";

export const AuthContext = createContext();

const initialState = {
  user: null,
};

function AuthReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        user: payload,
      };
    case LOGOUT:
      return {
        user: null,
      };
    default:
      return state;
  }
}
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      logIn(dispatch, user);
    }
  }, []);

  console.log(state, "auth context");
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
