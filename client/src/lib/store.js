import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../lib/reducers/slices/languageSlice'

export const store = configureStore({
  reducer: {
    language:languageReducer,
    },
});