import { ADD_TO_BOOKMARK, REMOVE_FROM_BOOKMARK } from "./BookmarkType"

export const addBookmark = (data) => {
    return ({
        type : ADD_TO_BOOKMARK,
        payload : data
    })
}

export const removeBookmark = (data) => {
    return ({
        type : REMOVE_FROM_BOOKMARK,
        payload : data
    })
}