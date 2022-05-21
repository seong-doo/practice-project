import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import filteredList, { setFilteredList } from 'store/filteredList';
import searchString, { setSearchString } from 'store/searchString';

const rootReducer = combineReducers({
  searchString,
  filteredList,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { setFilteredList, setSearchString };
export default store;
