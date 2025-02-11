import { combineReducers } from "redux";
import { bookReducer } from "./LibraryReducer";
import { authReducer } from "./auth.reducer";


export const rootReducer = combineReducers({
    bookReducer,
    authReducer
})