import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter.js';

const store = configureStore({
  reducer: {

  },
});

export default store; // Exporting 'store' as default
