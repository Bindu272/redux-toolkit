import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Bindu Patil" },
  { id: "1", name: "Your Name" },
  { id: "2", name: "Content Creator" },
];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
