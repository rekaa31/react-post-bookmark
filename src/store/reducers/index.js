import { combineReducers } from "redux";
import BookmarkReducer from "./BookmarkReducer";

const reducers = combineReducers({
    bookmark : BookmarkReducer
})

export default reducers