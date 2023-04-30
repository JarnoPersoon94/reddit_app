import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import apiSubredditReducer from '../features/API/apiSubredditSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    subreddit: apiSubredditReducer
  },
});
