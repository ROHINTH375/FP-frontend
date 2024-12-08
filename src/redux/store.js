import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './jobSlice'; // Create jobSlice.js for managing job-related state

const store = configureStore({
  reducer: {
    jobs: jobReducer, // Add job slice reducer
  },
});

export default store;
