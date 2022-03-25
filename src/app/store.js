import { configureStore } from '@reduxjs/toolkit';

import  formSlice  from '../features/counter/FormSlice';

export const store = configureStore({
  reducer: {
     todoStore: formSlice
  },
});
