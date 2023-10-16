import { configureStore } from '@reduxjs/toolkit';
// import { signInWithGoogle, signOut } from "./authSlice";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
