export const LOGIN = "Login User";
export const LOGOUT = "Log out User";
export const SIGNUP = "Sign Up User";

export const logIn = (dispatch, payload) => {
  dispatch({ type: LOGIN, payload });
};

export const logOut = (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const signUp = (dispatch, payload) => {
  dispatch({ type: SIGNUP, payload });
};
