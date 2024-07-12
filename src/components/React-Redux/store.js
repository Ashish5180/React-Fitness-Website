import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer'; 
import BlogSlice from './BlogSlice';



// Define rootReducer combining cartReducer and other reducers if any
const rootReducer = combineReducers({
  cart: cartReducer,
  blog: BlogSlice,
  // Other reducers here
});

// Load initial state from local storage if available
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to local storage whenever it changes
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch {
    // Ignore write errors
  }
};

// Create the Redux store with the rootReducer and initial state loaded from local storage
const store = createStore(rootReducer, loadState());

// Subscribe to store changes to save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
