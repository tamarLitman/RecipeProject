 import axios from "axios"

//  ====================================users===============
 //שליפת משתמש לפי מייל וסיסמה
export const getByEmail = (email,password) => {
    try {
       
        return axios.get(`https://localhost:7130/api/User/${email}/${password}`)
    }
    catch {
        return null
    }
}

//POST מקביל ל 
export const addUser = (user) => {
    try {        
        return axios.post(`https://localhost:7130/api/User`, user)
    }
    catch {
        return null
    }
}
// ===================================categories============================

// get
export const getCategory=()=>{
    try{
        return axios.get(`https://localhost:7130/api/Category`)

    }
    catch{
        return null
    }
}

// post
export const postCategory=async (category)=>{
    try{
        return await axios.post(`https://localhost:7130/api/Category`,category)

    }
    catch{
        return null
    }
}

// ==================================levels==================================
// get
export const getLevel=()=>{
    try{
        return axios.get(`https://localhost:7130/api/Level`)

    }
    catch{
        return null
    }
}

// post
export const postLevel=async (level)=>{
    try{
        return await axios.post(`https://localhost:7130/api/Level`, level)

    }
    catch{
        return null
    }
}
// =================================ingredients===========================
// get
export const getIngredients=()=>{
    try{
        return axios.get(`https://localhost:7130/api/Ingredient`)

    }
    catch{
        return null
    }
}

// post
export const postIngredients=async (i) => {
    console.log('add ingredient')
    let ingredient = null
    try {
        await axios.post(`https://localhost:7130/api/Ingredient`, i).then(result => ingredient = result.data)
    }
    catch { return null }
    return ingredient;
}

// ====================================recipes===============================
// של מתכונים get 




export const getRecipes=async ()=>{
    try{
        return await axios.get(`https://localhost:7130/api/Recipe`)
    }
    catch{ return null}
}
// post
export const postRecipe=async (r)=>{
    let recipe = null
    try {
        await axios.post(`https://localhost:7130/api/Recipe`, r)
        .then(result => recipe = result.data)
    }
    catch { return null }
    return recipe;
}
// ==========================IngredientsToRecipe============================
// get
export const getIngredientsToRecipe=(recipeId)=>{
    try{
        return axios.post(`https://localhost:7130/api/IngredientsToRecipe/${recipeId}`)

    }
    catch{
        return null
    }
}
// IDהאם ומה הפונקציה הנ"ל מקבלת, אם מתקבל בשרת ה  
// post
export const postIngredientsToRecipe=(ingredientsToRecipe)=>{
    try{
        return axios.post(`https://localhost:7130/api/IngredientsToRecipe`, ingredientsToRecipe)

    }
    catch{
        return null
    }
}

// ==============================CommentsToRecipe==========================
// get
export const getCommentsToRecipe=async(recipeId)=>{
    try{
        return await axios.get(`https://localhost:7130/api/CommentsToRecipe/${recipeId}`)
    }
    catch{ return null}
}
// post
export  const postCommentsToRecipe=async (comments)=>{
    try{
        return await axios.post(`https://localhost:7130/api/CommentsToRecipe`,comments)

    }
    catch{
        return null
    }
}