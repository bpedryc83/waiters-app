import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesReducer from './tablesRedux';
import statusesReducer from './statusesRedux';

export const getAllTables = (state) => state.tables;
export const getTableById = ({tables}, id) => tables.find(table => table.id === id);
export const getAllStatuses = (state) => state.statuses;

const subreducers = {
  tables: tablesReducer,
  statuses: statusesReducer,
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose (
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;