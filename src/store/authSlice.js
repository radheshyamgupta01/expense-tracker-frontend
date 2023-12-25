import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");
const initialState = {
  token: initialToken,
  isLoggedin: !!initialToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState:initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
      state.isLoggedin = true;
    },
    logout(state, action) {
      state.token = action.payload;
      state.isLoggedin = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";
// const authSlice=createSlice({
//   initialState:"",
//   reducers:{
//     login(){

//     },
//     logout(){

//     }
//   }
// })
// export const authaction=authSlice.actions;
// export const authReducer=authSlice.reducer