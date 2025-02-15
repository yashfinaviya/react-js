import { combineReducers } from "redux";
import { recipeReducer } from "./RecipeReducer";
import { authReducer } from "./auth.reducer";


export const rootReducer = combineReducers({
    recipeReducer,
    authReducer
})