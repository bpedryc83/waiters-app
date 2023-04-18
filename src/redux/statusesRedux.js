import { API_URL } from "../config";

const UPDATE_STATUSES = 'app/statuses/UPDATE_STATUSES';

export const updateStatuses = payload => ({ type: UPDATE_STATUSES, payload });
export const fetchStatuses = () => {
  return (dispatch) => {
    fetch(API_URL + '/statuses')
    .then(res => res.json())    
    .then(statuses => dispatch(updateStatuses(statuses)));
  }
}

const statusesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_STATUSES:
      return [...action.payload]
    default:
      return statePart;
  };
};

export default statusesReducer;