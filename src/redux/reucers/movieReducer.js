import { ActionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.MOVIES_LOADING:
      console.log(action);
      console.log(state);
      return { ...state, isLoading: true };
    case ActionTypes.MOVIES_SUCCESS:
      return { ...state, isLoading: false, movies: payload };
    case ActionTypes.MOVIES_ERROR:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

export default movieReducer;
