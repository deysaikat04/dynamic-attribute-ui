import { SET_ATTRIBUTE, UPDATE_ATTRIBUTE, SET_ERROR } from "./action-types";

export const setAttribute = (data) => {
  return {
    type: SET_ATTRIBUTE,
    payload: data,
  };
};

export const updateAttribute = (data) => {
  return {
    type: UPDATE_ATTRIBUTE,
    payload: data,
  };
};

export const setError = (err) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
