import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";


const rootReducers = combineReducers({
    todos: todoSlice
})

export const store = configureStore({
    reducer: rootReducers,
    // middleware: getDefaultMiddleware({
    //     serializableCheck: false
    // })
})