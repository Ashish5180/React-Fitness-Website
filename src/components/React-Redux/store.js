import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer'; // Adjust the path as necessary
import blogReducer from './BlogSlice'; // Adjust the path and name as necessary

// Define rootReducer combining cartReducer and other reducers if any
const rootReducer = {
  cart: cartReducer,
  blog: blogReducer,
  // Other reducers here if any
};

// Load initial state from local storage if available
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined; // Return undefined to let configureStore initialize with default state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return undefined; // Return undefined on error
  }
};

// Save state to local storage whenever it changes
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
    // Optionally handle the error (e.g., log, alert, or fallback)
  }
};

// Create the Redux store with the rootReducer and initial state loaded from local storage
const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
});

// Subscribe to store changes to save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
