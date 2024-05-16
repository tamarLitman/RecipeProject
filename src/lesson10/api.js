import axios from "axios"

export const getToDoes = () => {
    try {
        // axios - ספריה שמאפשרת לבצע קריאות שרת
        // .get / post... - שיטת הגישה
        // פרמטר הראשון - url
        // פרמטר שני - body
        // פרמטר שלישי - אובייקט אפשרויות
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }
    catch {
        return null
    }
}

export const getById = (id) => {
    try {
        return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    }
    catch {
        return null
    }
}

export const addPlayer = (player) => {
    try {
        console.log(player);
        debugger
        return axios.post(`https://localhost:7086/api/Players`, player)
    }
    catch {
        return null
    }
}