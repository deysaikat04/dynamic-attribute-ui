import { SET_ATTRIBUTE, UPDATE_ATTRIBUTE, SET_ERROR } from "../actions/action-types";

const initState = {  
    id:"",
    ipName: "",
    ipId: "",
    ipClass: "",
    ipSize: "",
    ipType: "",
    ipPlaceholder:"",
    ipLabel:"",
    error: ""
};

export default function counter(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ATTRIBUTE:
      return {
        ...state,
        ...payload,
      };
    case UPDATE_ATTRIBUTE:
      return {
        ...state,
        ...payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
