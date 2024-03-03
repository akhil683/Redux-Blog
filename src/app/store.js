import { configureStore } from "@reduxjs/toolkit";
import PostReducer from './features/posts/postSlice'
import usersReducer from './features/users/userSlice'

export const store = configureStore({
   reducer: {
      posts: PostReducer,
      users: usersReducer,
   }
})