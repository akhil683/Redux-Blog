import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   {
      id: '1',
      name: "Akhil palsra",
   },
   {
      id: '2',
      name: "Shivansh",
   },
   {
      id: '3',
      name: "Dhereaj",
   },
   {
      id: '4',
      name: "Rishu",
   },
]

const userSlice = createSlice({
   name: 'users',
   initialState,
   reducers :{}
})

export const selectedAllUsers = ( state ) => state.users
export default userSlice.reducer