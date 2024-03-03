import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
   {
      id: '1', 
      title: "Learning Redux Toolkit", 
      content: "I've heard good things about redux"
   },
   {
      id: '2',
      title: "Slices...", 
      content: "The more I say slice, the more I think of something..."
   }
]

export const postsSlice = createSlice({
   name: "posts",
   initialState,
   reducers: {
      postAdded: {
         reducer(state, action) {
            state.push(action.payload)
         },
         prepare(title, content, userId) {
            return {
               payload: {
                  id: nanoid(),
                  title,
                  content,
                  userId
               }
            }
         }
      },      
   }
})
export const { postAdded } = postsSlice.actions;
export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer
