import axios from "axios"

export const POST_SERVICE = {
    getAllPost
}

function getAllPost() {
    return axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        return response.data
    }).catch((error) => {
        return error.message
    })
}