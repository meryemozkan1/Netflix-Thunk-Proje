import { ActionTypes } from "../actionTypes";
import React from "react";
export const getPopuler = () => (dispatch) => {
  dispatch({
    type: ActionTypes.MOVIES_LOADING,
  });
};

export default movieActions;
