import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js"
import todoReducer from "./todoSlice.js"


const rootReducer = combineReducers({
    auth:authReducer,
    todo : todoReducer
})

export default rootReducer