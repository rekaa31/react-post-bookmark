import { ADD_TO_BOOKMARK, REMOVE_FROM_BOOKMARK } from "../actions/Bookmark/BookmarkType";

const BookmarkReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_BOOKMARK:
            return [...state, action.payload]

        case REMOVE_FROM_BOOKMARK:
            return state.filter(bookmark => bookmark.id !== action.payload.id);;

        default:
            return state
            
    }
}

export default BookmarkReducer