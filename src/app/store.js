import { configureStore } from '@reduxjs/toolkit';

import  formSlice  from '../features/List/FormSlice';

export const store = configureStore({
  reducer: {
     todoStore: formSlice
  },
});
