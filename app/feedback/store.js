import { configureStore } from "@reduxjs/toolkit";
import feedback from "./slice";
const store = configureStore({
    reducer:{
        feedback:feedback
    }
});
export default store;