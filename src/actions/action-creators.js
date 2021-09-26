import axios from "axios";
import {setAttribute, setError} from './actions';

const BASE_URL = process.env.REACT_APP_SERVER;

export function gettAttribute(id) {
  return (dispatch) => {
    let url = `${BASE_URL}/attr/${id}`;
    axios
      .get(url)
      .then((res) => {
        dispatch(setAttribute(res.data));
      })
      .catch((err) => {
        if (err.response) {
          dispatch(setError(err.response.data.msg));
        } else {
          dispatch(setError(err.message));
        }
      });
  };
}

export function postAttribute(attrData) {
  return (dispatch) => {
    let url = `${BASE_URL}/attr`;
    axios
      .post(url, attrData)
      .then((res) => {
        dispatch(setAttribute(res.data));
      })
      .catch((err) => {
        if (err.response) {
          dispatch(setError(err.response.data.msg));
        } else {
          dispatch(setError(err.message));
        }
      });
  };
}