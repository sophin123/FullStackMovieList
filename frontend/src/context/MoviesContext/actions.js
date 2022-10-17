export const GET_MOVIES = "Get all MOVIES";
export const CREATE_MOVIES = "create MOVIES";
export const DELETE_MOVIES = "delete MOVIES";
export const UPDATE_MOVIES = "Update MOVIES";

export const getMovies = (dispatch, payload) => {
  dispatch({ type: GET_MOVIES, payload });
};

export const createMovies = (dispatch, payload) => {
  dispatch({ type: CREATE_MOVIES, payload });
};

export const deleteMovies = (dispatch, payload) => {
  dispatch({ type: DELETE_MOVIES, payload });
};

export const updateMovies = (dispatch, payload) => {
  dispatch({ type: UPDATE_MOVIES, payload });
};
