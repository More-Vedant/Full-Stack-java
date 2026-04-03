import { configureStore } from '@reduxjs/toolkit';

import { counterSlicer } from '../Redux/counterSlicer';
import { TodoReducer } from '../Redux/TodoSlicer';

export const myStore = configureStore({
  reducer: {
    counter: counterSlicer.reducer,
    todo: TodoReducer,
  },
});
