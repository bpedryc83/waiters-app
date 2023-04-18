import { API_URL } from "../config";

const UPDATE_TABLES = 'app/tables/UPDATE_TABLES';
const EDIT_TABLES = 'app/tables/EDIT_TABLES';

export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch(API_URL + '/tables')
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)));
  }
}
export const putEditedTables = payload => ({ type: EDIT_TABLES, payload });
export const editTables = (newTableData) => {
  return () => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTableData),
    };
    
    const addressWithId = API_URL + '/tables/' + newTableData.id;

    fetch(addressWithId, options)
  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload]
    case EDIT_TABLES:
      return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
    default:
      return statePart;
  };
};

export default tablesReducer;